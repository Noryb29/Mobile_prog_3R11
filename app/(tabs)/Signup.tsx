import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, CheckBox, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '@/utils/supabase'; // Import the Supabase client


export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  // Validation States
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validate = () => {
    let valid = true;

    // Name validation
    if (name.trim() === '') {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

    // Email validation (basic email format check)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    // Confirm Password validation (must match password)
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    // Check agreement to terms
    if (!agree) {
      Alert.alert('Terms Agreement', 'You must agree to the terms of service');
      valid = false;
    }

    return valid;
  };

  const handleRegister = async () => {
    if (validate()) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) {
        // Handle registration errors
        Alert.alert('Registration Error', error.message);
      } else if (data) {
        // Registered successfully
        Alert.alert('Success', `Welcome, ${data.user.email}! Your account has been created.`);
      }
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Left Side - Form */}
      <View style={styles.formContainer}>
        <Text style={styles.header}>Sign up</Text>
        
        {/* Name Input */}
    <View style={styles.inputContainer}>
    <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
    <View style={styles.inputWrapper}>
    <Text style={styles.label}>Your Name</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your name"
      value={name}
      onChangeText={setName}
    />
    </View>
  </View>

        {/* Email Input */}
<View style={styles.inputContainer}>
  <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>Your Email</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your email"
      keyboardType="email-address"
      value={email}
      onChangeText={setEmail}
    />
  </View>
</View>

        {/* Password Input */}
<View style={styles.inputContainer}>
  <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>Password</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter your password"
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
    />
  </View>
</View>

{/* Confirm Password Input */}
<View style={styles.inputContainer}>
  <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
  <View style={styles.inputWrapper}>
    <Text style={styles.label}>Repeat your password</Text>
    <TextInput
      style={styles.input}
      placeholder="Repeat your password"
      
      secureTextEntry={true}
      value={confirmPassword}
      onChangeText={setConfirmPassword}
    />
  </View>
</View>

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={agree}
            onValueChange={setAgree}
          />
          <Text style={styles.checkboxLabel}>I agree to all statements in </Text>
          <TouchableOpacity>
            <Text style={styles.termsText}>Terms of service</Text>
          </TouchableOpacity>
        </View>

        {/* Error Messages Display */}
        <View style={styles.errorMessages}>
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side - Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 25,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    width:300,
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorMessages: {
    marginBottom: 20,
    width:300,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 200,
    marginLeft: 20,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
  icon: {
    marginRight: 10,
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  
  inputWrapper: {
    flex: 1,
  },
});
