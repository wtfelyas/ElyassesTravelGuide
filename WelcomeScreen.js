// WelcomeScreen.js
import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TouchableOpacity } from 'react-native';

// Import the background image
import backgroundImage from './images/background.jpg';

const WelcomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    // Navigate to the login screen (replace with your actual login screen name)
    navigation.navigate('LoginScreen');
  };

  const handleSignupPress = () => {
    // Navigate to the signup screen
    navigation.navigate('RegistrationScreen');
  };

  const handleContinueWithoutLogin = () => {
    // Navigate to the DestinationScreen
    navigation.navigate('DestinationScreen');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to{'\n'}ElyassesTravelGuide!</Text>
          <Text style={styles.subtitle}>
            Discover amazing locations and find the{'\n'}best travel destinations you need.
          </Text>
          <Text style={styles.subtitle2}>Sign up and Log in for more!</Text>
          <View style={styles.buttonBox}>
            <Button title="Login" onPress={handleLoginPress} />
            <View style={styles.separator} />
            <Button title="Register" onPress={handleSignupPress} />
          </View>
          <TouchableOpacity onPress={handleContinueWithoutLogin}>
            <Text style={styles.continueText}>Continue without logging in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Cochin', // You can replace this with your desired custom font
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
    fontFamily: 'Avenir', // You can replace this with your desired custom font
  },
  subtitle2: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    fontFamily: 'Avenir', // You can replace this with your desired custom font
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(50, 50, 50, 0.8)', // Dark grayish-black color
  },
  separator: {
    width: 10,
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
