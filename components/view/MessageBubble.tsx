import { Colors } from '@/constants/theme';
import { ChatMessage } from '@/types/chat';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MessageBubble({ message }: { message: ChatMessage }) {
    const isUser = message.role === 'user';

    return (
        <View style={[styles.wrapper, isUser ? styles.right : styles.left]}>
            <View style={[styles.bubble, isUser ? styles.userBubble : styles.assistantBubble,]}>
                <Text style={[styles.text, isUser ? styles.userText : styles.assistantText]}>
                    {message.content}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 6,
        width: '100%',
    },
    left: {
        alignItems: 'flex-start',
    },
    right: {
        alignItems: 'flex-end',
    },
    bubble: {
        maxWidth: '82%',
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 18,
    },
    assistantBubble: {
        backgroundColor: Colors['light'].assistantBubble,
        borderWidth: 1,
        borderColor: Colors['light'].border,
    },
    userBubble: {
        backgroundColor: Colors['light'].userBubble,
    },
    text: {
        fontSize: 15,
        lineHeight: 22,
    },
    assistantText: {
        color: Colors['light'].text,
    },
    userText: {
        color: Colors['light'].userText,
    },
});