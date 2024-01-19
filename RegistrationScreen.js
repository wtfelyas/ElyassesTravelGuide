import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./component/config";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    if (!validateFields()) {
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Password and Confirm Password must match. Please try again.');
      return;
    }

    create();
    Alert.alert('Success', 'Sign up successful!');
  };

  const validateFields = () => {
    if (!username || !validateEmail(email) || !age || !password || !confirmPassword || !validatePhoneNumber(phoneNumber)) {
      Alert.alert('Validation Error', 'Please fill in all the details correctly.');
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Remove any existing hyphens
    const cleanedNumber = phoneNumber.replace(/-/g, '');

    // Add hyphens in the correct positions
    const formattedNumber = cleanedNumber.replace(/(\d{2})(\d{3})(\d{7})/, '$1-$2-$3');
    setPhoneNumber(formattedNumber);

    // Check if the formatted number matches the required pattern
    const phoneRegex = /^\d{2}-\d{3}-\d{7}$/;
    return phoneRegex.test(formattedNumber);
  };

  const create = () => {
    setDoc(doc(db, "users", "LA"), {
      username: username,
      email: email,
      age: age,
      password: password,
      confirmPassword: confirmPassword,
      phoneNumber: phoneNumber,
    }).then(() => {
      console.log("Document successfully written!");
      navigation.navigate('WelcomeScreen');
    }).catch(error => {
      console.error("Error writing document: ", error);
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Sign Up</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => setAge(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number (00-000-0000000)"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => validatePhoneNumber(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
            <Text style={styles.signInText}>Already have an account? Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20, 
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'black',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'darkgreen',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signInText: {
    marginTop: 20,
    color: 'black',
    fontSize: 16,
  },
});

export default SignUpScreen;

const firebaseConfig = {
  apiKey: "AIzaSyB7FPfDa4Qw3IALD7oNkZWrT2VDVvgfylY",
  authDomain: "elirig67.firebaseapp.com",
  projectId: "elirig67",
  storageBucket: "elirig67.appspot.com",
  messagingSenderId: "443209289500",
  appId: "1:443209289500:web:b4d79a155e609a0c8734d9"
};
