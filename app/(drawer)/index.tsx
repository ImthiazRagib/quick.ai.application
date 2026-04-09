import ChatInput from "@/components/view/ChatInput";
import EmptyState from "@/components/view/EmptyState";
import MessageBubble from "@/components/view/MessageBubble";
import TypingIndicator from "@/components/view/TypingIndicator";
import { Colors } from "@/constants/theme";
import { useChat } from "@/hooks/use-chat";
import { useRef } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { messages, loading, sendMessage, resetChat } = useChat();
  const flatListRef = useRef<FlatList>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.flex} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* <View style={styles.header}>
          <Image
            source={require('../../assets/quickdropx.png')}
            style={{ width: 32, height: 32, borderRadius: 6 }}
          />
          <Text style={styles.headerTitle}>Ai Support</Text>
          <TouchableOpacity onPress={resetChat} style={styles.clearButton}>
            <Ionicons name="trash-outline" size={22} color="#111" />
          </TouchableOpacity>
        </View> */}

          <View style={styles.content}>
            {messages.length === 0 ? (
              <EmptyState />
            ) : (
              <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MessageBubble message={item} />}
                contentContainerStyle={styles.listContent}
                onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
              />
            )}

            {loading && <TypingIndicator />}
          </View>

          <ChatInput onSend={sendMessage} loading={loading} />
        </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors['light'].background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors['light'].background,
  },
  header: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors['light'].border,
    backgroundColor: Colors['light'].surface,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors['light'].text,
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors['light'].border,
    backgroundColor: '#fff',
  },
  clearButtonText: {
    color: Colors['light'].text,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  listContent: {
    paddingBottom: 12,
  },
});