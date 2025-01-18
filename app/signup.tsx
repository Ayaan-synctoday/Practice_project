import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic here 
    // axios
    console.log('Sign Up Pressed');
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Create new Account</Text>
      <Text style={styles.subtitle}>Already Registered? <Link href={'/login'}>Login Here</Link></Text>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>
    <View style={styles.container}>
      

      <TextInput
        style={styles.input}
        placeholder="NAME"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="PHONE NUMBER"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
       <Text>------------------Or Continue With------------------</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/images/google-logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/images/facebook-logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      
      
    </View>
    <Text style={styles.poweredBy}>Powered by Alinfo</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({

  page:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8C52FF',
  },

  circle2: {
    position: 'absolute', // Place it behind the form
    width: 300, // Size of the circle
    height: 300,
    borderRadius: 150, // Half of width/height for a perfect circle
    backgroundColor: 'orange',
    right: 100, // Move it partially behind the form (adjust as needed)
    top: '12.9%', // Vertically align with the form
  },


  circle: {
    position: 'absolute', // Place it behind the form
    width: 300, // Size of the circle
    height: 300,
    borderRadius: 150, // Half of width/height for a perfect circle
    backgroundColor: 'orange',
    right: -100, // Move it partially behind the form (adjust as needed)
    top: '33%', // Vertically align with the form
  },

  container: {
    
    flex: 3/4,
    backgroundColor: '#FFFFFF',
    paddingTop:40,
    paddingBottom:80,
    padding: 15,
    borderRadius:20,
  },
  
  title: {
    color:'#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color:'#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width:250,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    
    backgroundColor:'#FFFFFF',
    
    textAlign: 'center',
    marginTop: 'auto',
  },
  
});

export default SignUpPage;