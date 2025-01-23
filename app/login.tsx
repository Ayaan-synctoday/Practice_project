import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login Pressed');
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Decorative circles */}
      <View style={styles.circleTopLeft} />
      <View style={styles.circleBottomRight} />
      
      <View style={styles.topContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.formContainer}>
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
          //secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signup}>
          <Text style={styles.signupText}>Signup</Text>
        </View>

        <View style={styles.signup}>
          <Text style={styles.signupText}>or continue with</Text>
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
        <Text style={styles.poweredBy}>Powered by ALinfo</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8c52ff', // Background color adjusted
    position: 'relative', // Needed for positioning children
  },
  circleTopLeft: {
    position: 'absolute',
    
    top: 160, // Adjusted to position perfectly behind the top-left of the form
    left: -50, // Tweaked for better alignment
    width: 200, // Reduced size to fit snugly behind the top-left corner
    height: 200, // Same as width for a perfect circle
    borderRadius: 100, // Half of width/height for a perfect circle
    backgroundColor: '#ffa401', // Matches the image
    zIndex: 0, // Behind the form container
  },
  circleBottomRight: {
    position: 'absolute',
    bottom: 50, // Positioned at the bottom-right, mirroring the top-left position
    right: -50, // Tweaked to align symmetrically with the bottom-right corner
    width: 200, // Same size as the top-left circle
    height: 200, // Same as width for a perfect circle
    borderRadius: 100, // Half of width/height for a perfect circle
    backgroundColor: '#ffa401', // Matches the color of the top-left circle
    zIndex: 0, // Ensures it stays behind the form container
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: 'white',
    marginBottom: 10,
  },
  formContainer: {
    width: '80%', // Increased width
    backgroundColor: 'white',
    height:'64%',
    padding: 30, // Increased padding
    borderRadius: 40,
    paddingTop:'20%',
    paddingBottom:'10%',
    alignSelf: 'center',
    marginTop: 40, // Added more margin
    zIndex: 1, // Ensure it's above the circles
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
    backgroundColor:'silver'
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
  forgotPassword: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
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

export default LoginScreen;


