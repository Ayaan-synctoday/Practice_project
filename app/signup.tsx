import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import handleSignup from './handleSignup'
import axios from "axios";


const SignUpPage = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

//

  const onSignup = () => {
    if (!username || !email || !phone || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    handleSignup(username, email, phone, password);
  };

  return (
    <View style= {exstyles.page}>
      <Text style={exstyles.title}>Create new Account</Text>
      <Text style={exstyles.subtitle}>Already Registered? <Link href={'/login'}>Login Here</Link></Text>
      <View style={exstyles.circle}></View>
      <View style={exstyles.circle2}></View>
    <View style={exstyles.container}>
      

      <TextInput
        style={exstyles.input}
        placeholder="NAME"
        value={username}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={exstyles.input}
        placeholder="EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={exstyles.input}
        placeholder="PASSWORD"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={exstyles.input}
        placeholder="PHONE NUMBER"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />

      <TouchableOpacity style={exstyles.button} onPress={onSignup}>
        <Text style={exstyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
       <Text>------------------Or Continue With------------------</Text>
      <View style={exstyles.socialButtons}>
        <TouchableOpacity style={exstyles.socialButton}>
          <Image source={require('../assets/images/google-logo.png')} style={exstyles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={exstyles.socialButton}>
          <Image source={require('../assets/images/facebook-logo.png')} style={exstyles.socialIcon} />
        </TouchableOpacity>
      </View>

      
      
    </View>
    <Text style={exstyles.poweredBy}>Powered by Alinfo</Text>
    </View>
    
  );
};

const exstyles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C52FF",
  },

  circle2: {
    position: "absolute", // Place it behind the form
    width: 300, // Size of the circle
    height: 300,
    borderRadius: 150, // Half of width/height for a perfect circle
    backgroundColor: "orange",
    right: 100, // Move it partially behind the form (adjust as needed)
    top: "12.9%", // Vertically align with the form
  },

  circle: {
    position: "absolute", // Place it behind the form
    width: 300, // Size of the circle
    height: 300,
    borderRadius: 150, // Half of width/height for a perfect circle
    backgroundColor: "orange",
    right: -100, // Move it partially behind the form (adjust as needed)
    top: "33%", // Vertically align with the form
  },

  container: {
    flex: 3 / 4,
    backgroundColor: "#FFFFFF",
    paddingTop: 40,
    paddingBottom: 80,
    padding: 15,
    borderRadius: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "#FFFFFF",
    marginBottom: 20,
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  poweredBy: {
    backgroundColor: "#FFFFFF",

    textAlign: "center",
    marginTop: "auto",
  },
});

export default SignUpPage;