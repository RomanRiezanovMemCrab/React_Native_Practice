import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './home.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';

import AvatarIcon from '../../assets/icons/avatar-icon.svg';
import {COLORS} from '../../theme/theme';
import {ROUTES} from '../../navigation/navigator-config';
import {ScrollView} from 'react-native-gesture-handler';
import {useState} from 'react';
import {MOVIES} from './home-consts';
import {Movies} from './components/movies';
import {MovieList} from './home.types';

export function HomeScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();

  const [movies, setMovies] = useState<MovieList[]>(MOVIES);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.userContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PROFILE)}>
          <AvatarIcon width={40} height={40} fill={COLORS.white} />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {movies.map((movieList, index) => (
          <Movies
            data={movieList.movies}
            type={movieList.type}
            title={movieList.title}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}
