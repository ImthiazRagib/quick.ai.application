import { Colors } from '@/constants/theme';
import { useChat } from '@/hooks/use-chat';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChatInput({ onSend, loading }: { onSend: (text: string) => Promise<void>; loading: boolean }) {
  const { resetChat, messages } = useChat();
  const [text, setText] = useState('');

  const handleSend = async () => {
    const value = text.trim();
    if (!value || loading) return;
    setText('');
    Keyboard.dismiss();
    await onSend(value);
  };

  return (
    <View>
      {messages.length > 0 ? <View style={{ margin: 12, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <Text>Terminate Session</Text>
        <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={() => resetChat()}>
         <Text style={styles.buttonText}>Terminate</Text>
        </TouchableOpacity>
      </View> : null}
      <View style={styles.container}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Ask me anything..."
          placeholderTextColor={Colors['light'].subText}
          multiline
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleSend}
          style={[styles.button, loading && styles.buttonDisabled]}
          disabled={loading}
        >
          {/* <Text style={styles.buttonText}>{loading ? '...' : 'Send'}</Text> */}
          {loading ? <ActivityIndicator /> : <Feather name="send" size={16} color="#fff" />}
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    padding: 12,
    backgroundColor: Colors['light'].surface,
    borderTopWidth: 1,
    borderTopColor: Colors['light'].border,
  },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 120,
    backgroundColor: Colors['light'].background,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors['light'].text,
  },
  button: {
    height: 48,
    minWidth: 64,
    borderRadius: 16,
    backgroundColor: Colors['light'].primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: Colors['light'].surface,
    fontWeight: '600',
    fontSize: 14,
  },
});