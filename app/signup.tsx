import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setusername] = useState('');


  const handleSignUp = async () => {
    console.log('Sign Up Pressed');
    const url = "http://10.0.2.2:8000/users/signup";
    let result = await fetch(url,{method:"POST", headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({username,email,phone,password})
  })

  };
  const loginpage = () => {
    console.log('Directed to login page');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Decorative circles */}
        <View style={styles.circleTopLeft} />
        <View style={styles.circleBottomRight} />

        <View style={styles.topContainer}>
          <Text style={styles.title}>Create New</Text>
          <Text style={styles.title}>Account</Text>
          <Text style={styles.subtitle}>Already Registered? 
          <Link href="/login" onPress={loginpage}> 
            Login Here 
          </Link>
        </Text>
        </View>

        <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>NAME</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={username}
        onChangeText={(text) => setusername(text)}
        />

          <Text style={styles.inputLabel}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.inputLabel}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.inputLabel}>PHONE NUMBER</Text>
<TextInput
  style={styles.input}
  placeholder="Enter Phone Number"
  keyboardType="phone-pad"
  value={phone}
  onChangeText={(text) => setPhone(text)}
/>


          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signup}>
  <Text style={styles.signupText}>------Or Register With-----</Text>
</View>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/images/google-logo.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/images/facebook-logo.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>

          <Text style={styles.poweredBy}>Powered by ALinfoo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8c52ff',
    position: 'relative',
  },
  circleTopLeft: {
    position: 'absolute',
    top: 160,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ffa401',
    zIndex: 0,
  },
  circleBottomRight: {
    position: 'absolute',
    bottom: 50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#ffa401',
    zIndex: 0,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: -10,

  },
  title: {

    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    padding:-5,
    
  },
  subtitle: {
    
    color: 'white',
    marginBottom: 10,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    height: 'auto',
    padding: 30,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 0,
    zIndex: 1,
  },
  inputLabel: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'silver',
  },
  button: {
    backgroundColor: '#ffa401',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  alreadyAccount: {
    marginTop: 10,
    alignItems: 'center',
  },
  alreadyAccountText: {
    color: '#007bff',
  },
  signup: {
    marginTop: 10,
    alignItems: 'center',
  },
  signupText: {
    color: '#007bff',
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
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poweredBy: {
    textAlign: 'center',
  },
});

export default SignUpScreen;
