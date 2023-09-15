import {Button, Modal, Text, View} from 'react-native';
import {styles} from './modals.style';
import {useCallback, useState} from 'react';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/navigator-config';
import {ReactNativeModal} from '../../components/reactNativeModal/react-native-modal';

export function ModalsScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();
  const [isOpenReactNativeModal, setIsOpenReactNativeModal] = useState(false);

  const handleOpenUserInfo = useCallback(() => {
    navigation.navigate(ROUTES.USER_INFO);
  }, []);

  const handleOpenTransparentUserInfo = useCallback(() => {
    navigation.navigate(ROUTES.TRANSPARENT_USER_INFO);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modals</Text>
      <Button title="Open Simple Modal" onPress={handleOpenUserInfo} />
      <Button
        title="Open Transparent Modal"
        onPress={handleOpenTransparentUserInfo}
      />
      <Button
        title="Open React Native Modal"
        onPress={() => setIsOpenReactNativeModal(true)}
      />
      <ReactNativeModal
        title="React Native Modal"
        isOpen={isOpenReactNativeModal}
        onClose={() => setIsOpenReactNativeModal(false)}
      />
    </View>
  );
}
