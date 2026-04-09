import { useChat } from '@/hooks/use-chat';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DrawerLayout() {
    const { resetChat } = useChat();
    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                headerShown: true,
                drawerType: 'slide',
                drawerActiveTintColor: '#111827',
                drawerLabelStyle: {
                    fontSize: 15,
                },
                headerStyle: {
                    height: 120,
                    backgroundColor: '#f9fafb',
                    borderBottomWidth: 1,
                    borderBottomColor: '#e5e7eb',
                },
                headerTitleStyle: {
                    fontWeight: '700',
                },
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={{ marginLeft: 16, }}
                    >
                        <Image
                            source={require('../../assets/quickdropx.png')}
                            style={{ width: 32, height: 32, borderRadius: 6 }}
                        />
                    </TouchableOpacity>
                ),
                // headerRight: () => (
                //     <TouchableOpacity onPress={resetChat} style={styles.clearButton}>
                //         <Ionicons name="trash-outline" size={22} color="#111" />
                //     </TouchableOpacity>
                // ),
            })}
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: 'Chat',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="history"
                options={{
                    title: 'History',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="time-outline" size={size} color={color} />
                    ),
                }}
            />

            {/* <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      /> */}

            <Drawer.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="about"
                options={{
                    title: 'About',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="information-circle-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
}

const styles = StyleSheet.create({
    clearButton: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        backgroundColor: '#fff',
    },
});