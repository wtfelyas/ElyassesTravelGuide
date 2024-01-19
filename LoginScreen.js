// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { auth, signInWithEmailAndPassword } from './component/config'; // Update the path accordingly

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in
        const user = userCredential.user;
        // Navigate to the home screen or any other screen after successful login
        navigation.navigate('DestinationScreen');
      })
      .catch((error) => {
        console.error('Login error:', error.message);
        // Handle authentication error, e.g., display an error message to the user
      });
  };

  return (
    <ImageBackground
      source={require('./images/travelback.jpg')} // Update the path accordingly
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
        <TextInput
  style={styles.input}
  placeholder="Enter Your Email"
  placeholderTextColor="white" // Set placeholder text color
  value={email}
  onChangeText={(text) => setEmail(text)}
/>
<TextInput
  style={styles.input}
  placeholder="Enter Your Password"
  placeholderTextColor="white" // Set placeholder text color
  secureTextEntry
  value={password}
  onChangeText={(text) => setPassword(text)}
/>
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value to control the transparency
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: 'white',
  },
});

export default LoginScreen;
