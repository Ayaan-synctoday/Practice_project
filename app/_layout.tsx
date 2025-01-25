import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="index"/>
    <Stack.Screen name="SignUp"/>
    <Stack.Screen name="Login"/>
    <Stack.Screen name="Otp" />
  </Stack>;
}

