import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Linking,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './_layout';  // Path to your type definition file
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const IndexScreen =()=> {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Initialize navigation
  
  
  return (
    <View style={styles.container}>
      
      <ImageBackground style= {{width:400, height:300}}
      source={require('../assets/images/logo.png')}> </ImageBackground>
      <Text style={styles.title}>Wrench Pro</Text>
      <Text style={styles.subtitle}>Get Started</Text>

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        
          <Text style={styles.buttonText}>Login</Text>
      
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
         <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8C52FF',
  },
  title: {
    fontFamily:'poppins',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  buttonContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#FEB06A',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IndexScreen;