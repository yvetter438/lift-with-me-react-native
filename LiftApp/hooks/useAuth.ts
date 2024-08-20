import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signUp } from '@/services/authService';

export const useAuth = () => {
    const [authToken, setAuthToken] = useState<string | null>(null);

    const handleSignUp = async (username: string, email: string, password: string, lastName: string, firstName: string) => {
        try {
            const token = await signUp(username, email, password, lastName, firstName);
            await AsyncStorage.setItem('authToken', token);
            setAuthToken(token);
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return {
        authToken,
        handleSignUp,
    };
};
