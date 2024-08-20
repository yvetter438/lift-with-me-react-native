// src/services/userService.ts

import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.40.79:2024'; // Replace with your actual API URL

interface UserData {
  id: number;
  username: string;
  passwordHash: string;
  email: string;
  lastName: string;
  firstName: string;
  // Add other user properties as needed
}

export async function fetchUserData(): Promise<UserData | null> {
  console.log('function being called');

  try {
    // Retrieve the token from AsyncStorage
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      console.error('No token found');
      return null;
    }

    const response = await fetch(`${API_URL}/auth/user`, {
      method: 'GET',
      headers: {
        'x-access-token': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData: { user: UserData } = await response.json();
    return userData.user;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

// You can add other user-related API functions here
export async function updateUserProfile(userData: Partial<UserData>): Promise<boolean> {
  // Implementation for updating user profile
  return true; // Return success status
}

export async function changePassword(oldPassword: string, newPassword: string): Promise<boolean> {
  // Implementation for changing password
  return true; // Return success status
}
