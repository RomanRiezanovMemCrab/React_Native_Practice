import {Text, View} from 'react-native';
import {styles} from './profile.style';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';
import {useNavigation} from '@react-navigation/native';

export function ProfileScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}
