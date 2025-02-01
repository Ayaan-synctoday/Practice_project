import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const ForgotPasswordScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    console.log('Send OTP pressed for:', mobileNumber);
  };

  const handleVerifyOtp = () => {
    console.log('Verify OTP pressed with OTP:', otp);
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
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>
              </View>
        

        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>ENTER REGISTERED MOBILE NUMBER OR MAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
            maxLength={10} // Restrict to 10 digits
          />

          <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>

          <Text style={styles.line}>................................................................</Text>

          <Text style={[styles.inputLabel, { marginTop: 20 }]}>ENTER OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={(text) => setOtp(text)}
            maxLength={6} // Restrict to 6 digits
          />

          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
                <Text style={styles.poweredBy}>Powered by ALinfo</Text>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 40,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'white',
    height:'64%',
    padding: 30,
    paddingTop:'20%',
    paddingBottom:'10%',
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 40,
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
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    width:'60%',
    alignSelf:'center'
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    alignItems:'center'
  },
  line:{
    fontWeight:'bold',
    paddingTop:20,
    alignItems:'center'

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

export default ForgotPasswordScreen;