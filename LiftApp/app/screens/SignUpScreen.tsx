import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const router = useRouter();

  const handleSignUp = () => {
    // Handle sign-up logic here
    // If successful:
    // Redirect to another screen or show a success message
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      
      <Text style={styles.title}>Create Account</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#aaa"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
      />
      
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 20,
    marginBottom: 30,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  signUpButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
