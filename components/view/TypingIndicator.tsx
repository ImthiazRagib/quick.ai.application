import { Colors } from '@/constants/theme';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function TypingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={Colors['light'].primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: Colors['light'].background,
    borderWidth: 1,
    borderColor: Colors['light'].border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
  },
});