import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import UserProfile from '../../components/userProfile';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <UserProfile />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF', // Optional: You can keep or remove this based on your design
    },
});