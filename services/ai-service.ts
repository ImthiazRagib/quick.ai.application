import Constants from 'expo-constants';
import { ChatMessage } from '../types/chat';

const API_URL = process.env.EXPO_PUBLIC_API_URL || Constants.expoConfig?.extra?.apiUrl;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY || Constants.expoConfig?.extra?.apiKey;

interface ChatApiResponse {
  message: string;
}

export const sendMessageToAI = async (messages: ChatMessage[]): Promise<string> => {
  if (!API_URL) {
    // fallback mock response for local development
    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user');
    return `You said: ${lastUserMessage?.content || 'Hello'}`;
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
    },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error('Failed to get AI response');
  }

  const data: ChatApiResponse = await response.json();
  return data.message;
};