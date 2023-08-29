import {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {HomeScreen} from '../screens/home/home-screen';

import {DISABLE_HEADER, ROOR_SCREEN_OPTIONS, ROUTES} from './navigator-config';
import {DetailsScreen} from '../screens/details/details-screen';

export type RootParamList = {
  HOME: undefined;
  DETAILS: undefined;
};

const Stack = createStackNavigator<RootParamList>();

export type RootStackProps = CompositeScreenProps<
  NativeStackScreenProps<RootParamList, 'HOME'>,
  NativeStackScreenProps<RootParamList, 'DETAILS'>
>;

export type RootStackPropsNavigation = RootStackProps['navigation'];

export function RootNavigationInner() {
  // const { withHandling } = useFetch();

  // const { getMotives, getActivities } = useActivitiesContext();

  // function getData({ reduce }: any) {
  //   return withHandling(async () => {
  //     const result = await Promise.all([getMotives(), getActivities()]);
  //     return reduce(result);
  //   });
  // }
  // useNativeConstructor(getData, []);

  return (
    <Stack.Navigator
      screenOptions={ROOR_SCREEN_OPTIONS}
      initialRouteName={ROUTES.HOME}
      id="ROOT">
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={DISABLE_HEADER}
      />
      <Stack.Screen
        name={ROUTES.DETAILS}
        component={DetailsScreen}
        options={DISABLE_HEADER}
      />
    </Stack.Navigator>
  );
}

export function RootNavigation() {
  return <RootNavigationInner />;
}
