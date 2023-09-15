import {Button, Modal, Text, View} from 'react-native';
import {styles} from './react-native-modal.style';

type ReactNativeModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

export const ReactNativeModal = ({
  title,
  isOpen,
  onClose,
}: ReactNativeModalProps) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.nativeModalWrapper}>
        <View>
          <Text>{title}</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
