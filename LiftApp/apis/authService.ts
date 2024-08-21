export const signUp = async (
    username: string,
    email: string,
    password: string,
    lastName: string,
    firstName: string
  ): Promise<string | null> => {
    try {
      const response = await fetch('http://192.168.40.79:2024/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          lastName,
          firstName,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.token;
      } else {
        console.error('Signup failed:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Error during signup:', error);
      return null;
    }
  };


  //signIn
  
  import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.40.79:2024'; // Replace with your actual API URL

interface SignInCredentials {
  username?: string;
  email?: string;
  password: string;
}

interface SignInResponse {
  token: string;
}

export const signIn = async (credentials: SignInCredentials): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to sign in');
    }

    const data: SignInResponse = await response.json();
    
    // Store the token in AsyncStorage
    await AsyncStorage.setItem('userToken', data.token);

    return data.token;
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch (error) {
    console.error('Get token error:', error);
    return null;
  }
};