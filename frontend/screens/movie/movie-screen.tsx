import {
  ScrollView,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './movie.style';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import ChevronLeftIcon from '../../assets/icons/chevron-left-icon.svg';
import HeartIcon from '../../assets/icons/heart-icon.svg';
import {COLORS} from '../../theme/theme';
import {
  RootParamList,
  RootStackPropsNavigation,
} from '../../navigation/root-navigator';
import {useCallback, useMemo, useState} from 'react';
import {MOVIES_SRC} from '../home/home-consts';
import LinearGradient from 'react-native-linear-gradient';
import {P} from '../../components/typography/typography';

export function MovieScreen() {
  const route = useRoute<RouteProp<RootParamList, 'MOVIE'>>();
  const {name_src, name, description, released, time, genres} = route.params;
  const navigation = useNavigation<RootStackPropsNavigation>();

  const selectedImage = useMemo(() => {
    return MOVIES_SRC[name_src];
  }, [name_src]);

  const [like, setLike] = useState(false);

  const handleGoBack = useCallback(() => navigation.goBack(), []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity
            style={styles.chevronContainer}
            onPress={handleGoBack}>
            <ChevronLeftIcon width={40} height={40} fill={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likeContainer}
            onPress={() => setLike(prev => !prev)}>
            <HeartIcon
              fill={like ? COLORS.netflix : COLORS.white}
              width={40}
              height={40}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image source={selectedImage} style={styles.movieImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0, 1)']}
            style={styles.gradient}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <P type="h2">{name}</P>
        <P type="descriptor">
          Released • {released} • {time}min
        </P>
        <P type="descriptor">{genres.join(' • ')}</P>
        <P type="descriptor">{description}</P>
      </View>
    </ScrollView>
  );
}
