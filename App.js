// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Preloader from './Preloader';
import WelcomeScreen from './WelcomeScreen';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import DestinationScreen from './DestinationScreen';
import DetailsScreen from './DetailsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Preloader" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Preloader" component={Preloader} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DestinationScreen" component={DestinationScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;