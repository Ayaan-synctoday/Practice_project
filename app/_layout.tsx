import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import IndexScreen from './index';  // Ensure correct paths
import SignUpScreen from './signup';
import LoginScreen from './login';
import OtpScreen from './OtpScreen';

// Define types for navigation screensconsole.log('Navigation Container Loaded');
console.log('Stack Navigator Loaded');
console.log('Screens Loaded: Home, SignUp, Login, OtpScreen');
export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  OtpScreen: undefined;
};

//Pass the type to Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>(); 

export default function App() {
  return (

    
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
      </Stack.Navigator>
      
      
  );
}
