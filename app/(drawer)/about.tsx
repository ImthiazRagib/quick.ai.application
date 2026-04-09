import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WEBSITE_URL = "https://platform.quickdropx.com";

export default function AboutScreen() {
  const handleOpenWebsite = async () => {
    const supported = await Linking.canOpenURL(WEBSITE_URL);
    if (supported) {
      await Linking.openURL(WEBSITE_URL);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <View style={styles.logoBox}>
            <Ionicons name="sparkles-outline" size={28} color="#111827" />
          </View>

          <Text style={styles.title}>About QuickDropX</Text>

          <Text style={styles.subtitle}>
            Smart support and automation for modern eCommerce and dropshipping businesses.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <Text style={styles.bodyText}>
            Quick AI Support is a technology-focused platform built to simplify customer support,
            communication, and service workflows for online businesses. The goal is to help
            brands respond faster, support customers better, and create a smoother user
            experience through AI-powered assistance.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>What Quick AI Support Does</Text>

          <View style={styles.featureItem}>
            <Ionicons name="chatbubble-ellipses-outline" size={18} color="#374151" />
            <Text style={styles.featureText}>
              Handles customer conversations through a clean AI chat experience
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="cube-outline" size={18} color="#374151" />
            <Text style={styles.featureText}>
              Helps with product, order, and support-related questions
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="time-outline" size={18} color="#374151" />
            <Text style={styles.featureText}>
              Provides faster response times and 24/7 support availability
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Ionicons name="settings-outline" size={18} color="#374151" />
            <Text style={styles.featureText}>
              Reduces manual support workload through automation
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.bodyText}>
            Our mission is to build practical, scalable tools that improve support operations
            for digital commerce. QuickDropX focuses on combining simple design, reliable
            performance, and intelligent automation to help businesses grow efficiently.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>QuickdropX</Text>
          <Text style={styles.bodyText}>
            QuickDropX is a smart support and automation platform for eCommerce and dropshipping businesses. 
            It helps improve customer communication, reduce manual workload, and deliver faster support through AI-powered experiences.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Website</Text>

          <Pressable style={styles.linkButton} onPress={handleOpenWebsite}>
            <Ionicons name="globe-outline" size={18} color="#FFFFFF" />
            <Text style={styles.linkButtonText}>Visit QuickDropX Website</Text>
          </Pressable>

          <Text style={styles.websiteText}>{WEBSITE_URL}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F7F8",
  },
  container: {
    padding: 16,
    paddingBottom: 32,
    gap: 14,
  },
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  logoBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#6B7280",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#4B5563",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 12,
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: "#4B5563",
  },
  linkButton: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#111827",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  linkButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  websiteText: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
  },
});