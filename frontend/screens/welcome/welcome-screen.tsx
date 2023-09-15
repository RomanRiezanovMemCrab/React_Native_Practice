import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './welcome.style';
import {FullScreenImage} from '../../components/fullViewImage/full-view-image';
import {useNavigation} from '@react-navigation/native';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';
import {ROUTES} from '../../navigation/navigator-config';

export function WelcomeScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();
  return (
    <View style={styles.container}>
      <FullScreenImage>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.HOME)}
            style={styles.button}>
            <Text style={styles.text}>Continue</Text>
          </TouchableOpacity>
        </View>
      </FullScreenImage>
    </View>
  );
}
