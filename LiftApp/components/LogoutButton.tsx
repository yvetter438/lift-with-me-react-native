// src/components/LogoutButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Remove the token from AsyncStorage
      await AsyncStorage.removeItem('userToken');

      // Navigate to the root screen, which handles the initial token check
      router.replace('/screens/SignInScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('An error occurred while logging out. Please try again.');
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogoutButton;
