import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootNavigation} from './navigation/root-navigator';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
