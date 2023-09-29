import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../home.style';

import {P} from '../../../components/typography/typography';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Movie} from '../home.types';
import {useCallback, useMemo} from 'react';
import {MOVIES_SRC} from '../home-consts';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackPropsNavigation} from '../../../navigation/root-navigator';
import {ROUTES} from '../../../navigation/navigator-config';

type MovieCardProps = {
  movie: Movie;
  type: 'small' | 'medium' | 'large';
};

export function MovieCard({movie, type}: MovieCardProps) {
  const navigation = useNavigation<RootStackPropsNavigation>();

  const selectedImage = useMemo(() => {
    return MOVIES_SRC[movie.name_src];
  }, [MovieCard]);

  const openMovieInfo = useCallback(
    (movie: Movie) => navigation.navigate(ROUTES.MOVIE, movie),
    [],
  );

  const imageSize = useMemo(() => {
    switch (type) {
      case 'small':
        return {width: DEVICE_WIDTH * 0.33, height: DEVICE_HEIGHT * 0.22};
      case 'medium':
        return {width: DEVICE_WIDTH * 0.6, height: DEVICE_HEIGHT * 0.4};
      case 'large':
        return {width: DEVICE_WIDTH * 0.8, height: DEVICE_HEIGHT * 0.6};
      default:
        return {width: DEVICE_WIDTH * 0.6, height: DEVICE_HEIGHT * 0.4};
    }
  }, [type]);

  return (
    <TouchableWithoutFeedback onPress={() => openMovieInfo(movie)}>
      <Image
        source={selectedImage}
        style={[styles.moviePosterImage, {...imageSize}]}
      />
    </TouchableWithoutFeedback>
  );
}
