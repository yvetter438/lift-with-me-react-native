// src/components/UserProfile.tsx
import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../apis/userService';
import { Text, View } from 'react-native';

const UserProfile: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    async function loadUserData() {
      const userData = await fetchUserData();
      if (userData) {
        setUsername(userData.username);
      }
    }
    loadUserData();
  }, []);

  return (
    <View>
      <Text>Welcome, {username}!</Text>
    </View>
  );
}

export default UserProfile;