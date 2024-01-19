// Preloader.js

import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import necessary navigation hook

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      // Your asynchronous logic here
      // For example, setTimeout to simulate loading
      setTimeout(() => {
        setIsLoading(false);
        // Set loadingComplete to true after a certain amount of time
        setTimeout(() => {
          setLoadingComplete(true);
        }, 1000); // Adjust the duration as needed
      }, 3000);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Create a bouncing animation for the logo from the top side
      Animated.timing(bounceValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [isLoading, bounceValue]);

  useEffect(() => {
    if (!isLoading && loadingComplete) {
      // Redirect to WelcomeScreen after loading and showing the text
      navigation.replace('WelcomeScreen'); // Replace with the name of your welcome screen
    }
  }, [isLoading, loadingComplete, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./images/logo.png')} // Update with the path to your logo
        style={[
          styles.logo,
          {
            transform: [
              {
                translateY: bounceValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-100, 0], // Adjust the range as needed
                }),
              },
            ],
          },
        ]}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={styles.appName}> Welcome to ElyassesTravelGuide</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set a black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    marginBottom: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
});

export default Preloader;
