import {Text, View} from 'react-native';
import {styles} from './home.style';
import {SafeAreaView} from 'react-native-safe-area-context';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <Text style={styles.text}>HOME</Text>
    </SafeAreaView>
  );
}
