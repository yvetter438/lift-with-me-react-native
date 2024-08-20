import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('Stored token:', token); // Check if the token is being retrieved correctly
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Failed to retrieve token:', error);
        setIsLoggedIn(false);
      }
    };

    // Wait until the root layout and fonts are loaded before checking token and navigation
    if (loaded) {
      checkToken();
    }
  }, [loaded]);

  useEffect(() => {
    // Navigate to the appropriate screen based on login status
    if (loaded) {
      if (!isLoggedIn && segments[0] !== 'screens') {
        router.replace('/screens/SignInScreen');
      } else if (isLoggedIn && segments[0] === 'screens') {
        router.replace('/(tabs)/profile');
      }
    }
  }, [segments, isLoggedIn, loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
