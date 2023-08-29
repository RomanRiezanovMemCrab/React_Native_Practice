import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootNavigation} from './navigation/root-navigator';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
