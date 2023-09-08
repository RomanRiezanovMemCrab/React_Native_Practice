import {Text, View} from 'react-native';
import {styles} from './details.style';
import {COLORS} from '../../theme/theme';

export function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DETAILS</Text>
    </View>
  );
}
