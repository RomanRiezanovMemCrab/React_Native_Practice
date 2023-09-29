import {View} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {MovieCard} from './movie-card';
import {Movie} from '../home.types';
import {P} from '../../../components/typography/typography';
import {DEVICE_WIDTH} from '../../../theme/theme';
import {styles} from '../home.style';
import {useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackPropsNavigation} from '../../../navigation/root-navigator';
import {ROUTES} from '../../../navigation/navigator-config';

type TrendingProps = {
  data: Movie[];
  type?: 'small' | 'medium' | 'large';
  title?: string;
};

export function Movies({data, type = 'medium', title}: TrendingProps) {
  const itemWidth = useMemo(() => {
    switch (type) {
      case 'small':
        return DEVICE_WIDTH * 0.34;
      case 'medium':
        return DEVICE_WIDTH * 0.62;
      case 'large':
        return DEVICE_WIDTH * 0.8;
      default:
        return DEVICE_WIDTH * 0.6;
    }
  }, [type]);

  return (
    <View style={styles.moviesContainer}>
      <P>{title}</P>
      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard movie={item} type={type} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={DEVICE_WIDTH}
        itemWidth={itemWidth}
        slideStyle={styles.slide}
      />
    </View>
  );
}
