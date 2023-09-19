import {TouchableOpacity, View} from 'react-native';
import {styles} from './profile.style';
import {UserInfo} from '../../components/user-info/user-info';

import CloseIcon from '../../assets/icons/close-icon.svg';
import {COLORS} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';
import {useCallback} from 'react';

export function ProfileScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();

  const closeModal = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={closeModal}>
          <CloseIcon width={32} height={32} fill={COLORS.white} />
        </TouchableOpacity>
      </View>
      <UserInfo
        size="large"
        firstName="Roman"
        lastName="Riezanov"
        description="Frontend developer"
      />
    </View>
  );
}
