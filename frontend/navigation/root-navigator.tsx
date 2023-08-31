import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {HomeScreen} from '../screens/home/home-screen';

import {DISABLE_HEADER, ROOT_SCREEN_OPTIONS, ROUTES} from './navigator-config';
import {WelcomeScreen} from '../screens/welcome/welcome-screen';
import {UserInfoScreen} from '../screens/userInfo/user-info-screen';

export type RootParamList = {
  WELCOME: undefined;
  HOME: undefined;
  PROFILE: undefined;
  MODALS: undefined;
  USER_INFO: undefined;
  TRANSPARENT_USER_INFO: undefined;
  DETAILS: undefined;
  CONTACTS: undefined;
  DRAWER: undefined;
};

const Stack = createStackNavigator<RootParamList>();

export type RootStackProps = CompositeScreenProps<
  NativeStackScreenProps<RootParamList, 'WELCOME'>,
  NativeStackScreenProps<RootParamList, 'HOME'>
>;

export type RootStackPropsNavigation = RootStackProps['navigation'];

export function RootNavigationInner() {
  return (
    <Stack.Navigator
      screenOptions={ROOT_SCREEN_OPTIONS}
      initialRouteName={ROUTES.WELCOME}
      id="ROOT">
      <Stack.Screen
        name={ROUTES.WELCOME}
        component={WelcomeScreen}
        options={DISABLE_HEADER}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={DISABLE_HEADER}
      />
      <Stack.Screen
        name={ROUTES.USER_INFO}
        component={UserInfoScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name={ROUTES.TRANSPARENT_USER_INFO}
        component={UserInfoScreen}
        options={{
          presentation: 'transparentModal',
        }}
      />
    </Stack.Navigator>
  );
}

export function RootNavigation() {
  return <RootNavigationInner />;
}
