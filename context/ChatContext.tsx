import { sendMessageToAI } from '@/services/ai-service';
import { loadMessages, saveMessages } from '@/storage/chat-storage';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { ChatMessage } from '../types/chat';
import { generateId } from '../utils/id';
import { nowIso } from '../utils/time';

interface ChatContextType {
    messages: ChatMessage[];
    loading: boolean;
    initialized: boolean;
    sendMessage: (text: string) => Promise<void>;
    resetChat: () => Promise<void>;
}

export const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(false);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const bootstrap = async () => {
            try {
                const stored = await loadMessages();
                setMessages(stored);
            } finally {
                setInitialized(true);
            }
        };

        bootstrap();
    }, []);

    useEffect(() => {
        if (initialized) {
            saveMessages(messages).catch(console.error);
        }
    }, [messages, initialized]);

    const sendMessage = async (text: string) => {
        const trimmed = text.trim();
        if (!trimmed || loading) return;

        const userMessage: ChatMessage = {
            id: generateId(),
            role: 'user',
            content: trimmed,
            createdAt: nowIso(),
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setLoading(true);

        try {
            const aiText = await sendMessageToAI(updatedMessages);

            const assistantMessage: ChatMessage = {
                id: generateId(),
                role: 'assistant',
                content: aiText,
                createdAt: nowIso(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            const assistantError: ChatMessage = {
                id: generateId(),
                role: 'assistant',
                content: 'Sorry, something went wrong while generating the response.',
                createdAt: nowIso(),
            };

            setMessages((prev) => [...prev, assistantError]);
        }
    };
};