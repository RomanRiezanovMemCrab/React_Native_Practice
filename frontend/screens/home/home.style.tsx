import {StyleSheet} from 'react-native';
import {COLORS, DEVICE_HEIGHT, DEVICE_WIDTH} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  userContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
  },
  moviesContainer: {
    marginBottom: 40,
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
  },
  moviePosterImage: {
    borderRadius: 20,
  },
});
