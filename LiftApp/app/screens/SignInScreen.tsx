import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { signIn } from '../../apis/authService'; 

const SignInScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      console.log('Attempting to sign in...');
      const token = await signIn({ username, password });
      console.log('Sign in successful, token received');

      // Navigation to the profile screen
      console.log('Navigating to profile screen...');
      router.replace('/(tabs)/profile');
    } catch (error) {
      console.error('Sign in error:', error);
      Alert.alert('Error', error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  const navigateToSignUp = () => {
    router.push('/screens/SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.createAccount}>Don't have an account? Create One</Text>
      </TouchableOpacity>
    </View>
  );
}

// ... (styles remain unchanged)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  signInButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007bff',
    marginBottom: 30,
  },
  createAccount: {
    color: '#007bff',
    fontWeight: 'bold',
  }
});

export default SignInScreen;
