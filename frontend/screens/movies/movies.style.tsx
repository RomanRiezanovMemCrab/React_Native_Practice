import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
  },
});
