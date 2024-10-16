import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to validate input and handle registration
  const handleRegistration = () => {
    // Validate name (minimum 3 characters)
    if (name.length < 3) {
      Alert.alert('Invalid Name', 'Name should be at least 3 characters long.');
      return;
    }

    // Validate @clarku.edu email
    if (!email.endsWith('@clarku.edu')) {
      Alert.alert('Invalid Email', 'Please use your @clarku.edu email.');
      return;
    }

    // Validate phone (10 digits)
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Phone number should be 10 digits.');
      return;
    }

    // Validate password length (minimum 6 characters)
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Password should be at least 6 characters.');
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    // Simulating successful registration and navigating to SuccessPage or HomePage
    Alert.alert('Registration Success', `Account created for ${name}`);
    navigation.navigate('Home');  // Navigate to home page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Clark Marketplace Registration</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your @clarku.edu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
      />

      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

// Styling for the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default RegistrationPage;
