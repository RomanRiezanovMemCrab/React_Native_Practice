import {StyleSheet} from 'react-native';
import {COLORS, DEVICE_HEIGHT, DEVICE_WIDTH} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT - 500,
    borderWidth: 2,
    borderColor: COLORS.infoBorder,
  },
  text: {
    fontSize: 20,
    color: COLORS.blue,
  },
});
