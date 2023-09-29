import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 8,
    width: '85%',
    backgroundColor: COLORS.netflix,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: COLORS.white,

    textShadowColor: 'rgba(255, 255, 255, 0.75)',
    textShadowOffset: {width: -2, height: 3},
    textShadowRadius: 10,
  },
});
