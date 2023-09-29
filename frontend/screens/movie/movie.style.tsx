import {StyleSheet} from 'react-native';
import {
  COLORS,
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
  HAS_NOTCH_AND_OLD_ANDROID,
} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    opacity: HAS_NOTCH_AND_OLD_ANDROID ? 0.8 : 1,
  },
  header: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chevronContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.netflix,
    borderRadius: 5,
    margin: 20,
  },
  likeContainer: {
    margin: 20,
  },
  movieImage: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.55,
  },
  gradient: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.4,
    position: 'absolute',
    bottom: 0,
  },
  descriptionContainer: {
    top: -150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 20,
  },
});
