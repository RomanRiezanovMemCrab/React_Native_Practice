import {Text, View} from 'react-native';
import {styles} from './profile.style';
import Profile from '../../assets/icons/profile-icon.svg';
import {COLORS} from '../../theme/theme';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Profile width={100} height={100} fill={COLORS.blue} />
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}
