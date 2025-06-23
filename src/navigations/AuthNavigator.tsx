import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import LoginScreen from '../screens/auth/login/LoginScreen.tsx';

// tabs

export type RootStackParamList = {
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    //     @ts-ignore
    <Stack.Navigator initialRouteName="LoginScreen">
        {/* tabs */}

        {/* static screens */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{}} />

        {/* dynamic screens */}
    </Stack.Navigator>
);
}
