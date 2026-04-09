import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChatMessage } from '../types/chat';

const CHAT_STORAGE_KEY = 'ai_mobile_app_messages';

export const saveMessages = async (messages: ChatMessage[]) => {
  await AsyncStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
};

export const loadMessages = async (): Promise<ChatMessage[]> => {
  const raw = await AsyncStorage.getItem(CHAT_STORAGE_KEY) ?? '[]';
  return JSON.parse(raw);
};

export const clearMessages = async () => {
  await AsyncStorage.removeItem(CHAT_STORAGE_KEY);
};