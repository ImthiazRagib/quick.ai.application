import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Ionicons name="chatbubble-ellipses-outline" size={48} color={Colors['light'].subText} style={{ marginBottom: 16 }} />
      <Text style={styles.title}>AI Assistant</Text>
      <Text style={styles.subtitle}>Ask anything. Keep it simple.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: Colors['light'].text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: Colors['light'].subText,
    textAlign: 'center',
  },
});