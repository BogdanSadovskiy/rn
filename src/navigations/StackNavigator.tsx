import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import EditProfileScreen from '../screens/profile/EditProfileScreen.tsx';
import SettingsScreen from '../screens/settings/SettingsScreen';
import SingleForumScreen from '../screens/forum/SingleForumScreen.tsx';
import EventDetailsScreen from '../screens/events/EventDetailScreen.tsx';
import EventRegistrationScreen from '../screens/events/EventRegistrationScreen.tsx';


// tabs
import BottomTab from './TabNavigation.tsx';

export type RootStackParamList = {
  LoginScreen: undefined;
  BottomTab: undefined;
  EditProfile: undefined;
  SettingsScreen: undefined;
  SingleForumScreen: undefined;
  // Products: undefined;
  EventDetailsScreen: { event: any };
  EventRegistrationScreen: { event: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    //     @ts-ignore
    <Stack.Navigator initialRouteName="BottomTab">
      {/* tabs */}
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{}}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{}}
      />


      <Stack.Screen
        name="SingleForumScreen"
        component={SingleForumScreen}
        options={{}}
      />

      <Stack.Screen
        name="EventDetailsScreen"
        component={EventDetailsScreen}
        options={{ title: 'Event Details' }}
      />
      <Stack.Screen
        name="EventRegistrationScreen"
        component={EventRegistrationScreen}
        options={{ title: 'Event Registration' }}
      />
    </Stack.Navigator>
  );
}
