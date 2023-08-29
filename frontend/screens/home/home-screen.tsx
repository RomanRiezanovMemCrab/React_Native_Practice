import {Button, Text, View} from 'react-native';
import {styles} from './home.style';
import {useNavigation} from '@react-navigation/native';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';
import {ROUTES} from '../../navigation/navigator-config';

export function HomeScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(ROUTES.DETAILS)}
      />
    </View>
  );
}
