import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // Handle sign-in logic here
    // If successful:
    // Set the auth state to logged in (e.g., store token)
    setTimeout(() => {
      router.replace('/(tabs)'); // Navigate to Home screen if successfully signed in
    }, 100); // Delay to ensure the component is mounted and ready
  };

  const navigateToSignUp = () => {
    router.push('/screens/SignUpScreen'); // Navigate to SignUp screen
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#aaa"
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
