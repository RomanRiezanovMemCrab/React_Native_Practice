import {Text, View} from 'react-native';
import {styles} from './user-info.style';

export function UserInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Info</Text>
    </View>
  );
}
