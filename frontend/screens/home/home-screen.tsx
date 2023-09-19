import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './home.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';

import AvatarIcon from '../../assets/icons/avatar-icon.svg';
import {COLORS} from '../../theme/theme';
import {ROUTES} from '../../navigation/navigator-config';

export function HomeScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PROFILE)}>
          <AvatarIcon width={40} height={40} fill={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>HOME</Text>
    </SafeAreaView>
  );
}
