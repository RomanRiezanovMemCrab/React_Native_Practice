import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {DISABLE_HEADER, ROOT_SCREEN_OPTIONS, ROUTES} from './navigator-config';
import {WelcomeScreen} from '../screens/welcome/welcome-screen';
import {TabsScreen} from '../tabs/tabs-navigator';
import {ProfileScreen} from '../screens/profile/profile-screen';
import {MovieScreen} from '../screens/movie/movie-screen';
import {Movie} from '../screens/home/home.types';
import {IS_IOS} from '../theme/theme';

export type RootParamList = {
  WELCOME: undefined;
  HOME: undefined;
  MOVIE: Movie;
  PROFILE: undefined;
  MODALS: undefined;
  USER_INFO: undefined;
  TRANSPARENT_USER_INFO: undefined;
  DETAILS: undefined;
  CONTACTS: undefined;
  DRAWER: undefined;
  TABS: undefined;
};

export type TabRoutesList = Pick<RootParamList, 'HOME' | 'CONTACTS'>;

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
        name={ROUTES.TABS}
        component={TabsScreen}
        options={DISABLE_HEADER}
      />
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          ...DISABLE_HEADER,
          ...TransitionPresets.BottomSheetAndroid,
          presentation: IS_IOS ? 'modal' : 'transparentModal',
        }}
      />
      <Stack.Screen
        name={ROUTES.MOVIE}
        component={MovieScreen}
        options={DISABLE_HEADER}
      />
    </Stack.Navigator>
  );
}

export function RootNavigation() {
  return <RootNavigationInner />;
}
