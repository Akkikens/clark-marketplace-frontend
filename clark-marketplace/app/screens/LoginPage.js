import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login or registration
  const handleLogin = async () => {
    if (!email.endsWith('@clarku.edu')) {
      Alert.alert('Invalid Email', 'Please use your @clarku.edu email.');
      return;
    }

    try {
      const response = await fetch('https://your-backend-url.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Login Success', 'You are logged in.');
        // Proceed to the next screen in the app
      } else {
        Alert.alert('Login Failed', data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during login.');
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        placeholder="Enter your @clarku.edu email"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;
