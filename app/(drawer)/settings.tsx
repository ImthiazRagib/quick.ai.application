import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroCard}>
          <View style={styles.iconBox}>
            <Ionicons name="settings-outline" size={28} color="#111827" />
          </View>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>
            Manage your QuickDropX AI Support preferences and app experience.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="notifications-outline" size={18} color="#374151" />
              </View>
              <View>
                <Text style={styles.settingTitle}>Notifications</Text>
                <Text style={styles.settingDescription}>
                  Receive updates and support alerts
                </Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="moon-outline" size={18} color="#374151" />
              </View>
              <View>
                <Text style={styles.settingTitle}>Dark Mode</Text>
                <Text style={styles.settingDescription}>
                  Switch app appearance
                </Text>
              </View>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="volume-high-outline" size={18} color="#374151" />
              </View>
              <View>
                <Text style={styles.settingTitle}>Sound</Text>
                <Text style={styles.settingDescription}>
                  Play sound for AI responses
                </Text>
              </View>
            </View>
            <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Account</Text>

          <Pressable style={styles.linkRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="person-outline" size={18} color="#374151" />
              </View>
              <Text style={styles.linkText}>Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.linkRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="card-outline" size={18} color="#374151" />
              </View>
              <Text style={styles.linkText}>Subscription Plan</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.linkRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="lock-closed-outline" size={18} color="#374151" />
              </View>
              <Text style={styles.linkText}>Privacy & Security</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Support</Text>

          <Pressable style={styles.linkRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="help-circle-outline" size={18} color="#374151" />
              </View>
              <Text style={styles.linkText}>Help Center</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.linkRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="mail-outline" size={18} color="#374151" />
              </View>
              <Text style={styles.linkText}>Contact Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.linkRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons name="document-text-outline" size={18} color="#374151" />
              </View>
              <Text style={styles.linkText}>Terms & Conditions</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </Pressable>
        </View>

        <Pressable style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={18} color="#FFFFFF" />
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>

        <Text style={styles.versionText}>QuickDropX AI Support • Version 1.0.0</Text>
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
  iconBox: {
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
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  settingDescription: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 4,
  },
  linkRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  linkText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
  },
  logoutButton: {
    marginTop: 4,
    backgroundColor: "#111827",
    borderRadius: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  versionText: {
    textAlign: "center",
    fontSize: 13,
    color: "#6B7280",
    marginTop: 6,
  },
});