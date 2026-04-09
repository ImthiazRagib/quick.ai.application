import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

const mockHistory = [
  {
    id: "1",
    title: "Order tracking issue",
    preview: "Where is my order #12345?",
    time: "2h ago",
  },
  {
    id: "2",
    title: "Refund request",
    preview: "I want to request a refund for my last purchase",
    time: "Yesterday",
  },
  {
    id: "3",
    title: "Product inquiry",
    preview: "Does this product support fast shipping?",
    time: "2 days ago",
  },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      {mockHistory.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="time-outline" size={40} color="#9CA3AF" />
          <Text style={styles.emptyTitle}>No History Yet</Text>
          <Text style={styles.emptyText}>
            Your previous chats will appear here.
          </Text>
        </View>
      ) : (
        <FlatList
          data={mockHistory}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <Pressable style={styles.card}>
              <View style={styles.cardTop}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>

              <Text style={styles.preview} numberOfLines={2}>
                {item.preview}
              </Text>

              <View style={styles.cardBottom}>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={16}
                  color="#6B7280"
                />
                <Text style={styles.openText}>Open Chat</Text>
              </View>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F8",
  },
  listContent: {
    padding: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    flex: 1,
  },
  time: {
    fontSize: 12,
    color: "#9CA3AF",
    marginLeft: 8,
  },
  preview: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
    marginBottom: 10,
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  openText: {
    fontSize: 13,
    color: "#6B7280",
  },
  separator: {
    height: 12,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  emptyTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  emptyText: {
    marginTop: 6,
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});