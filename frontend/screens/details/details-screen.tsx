import {Text, View} from 'react-native';
import {styles} from './details.style';
import DetailsIcon from '../../assets/icons/glyphs/details';
import {COLORS} from '../../theme/theme';

export function DetailsScreen() {
  return (
    <View style={styles.container}>
      <DetailsIcon width={100} height={100} fill={COLORS.blue} />
      <Text style={styles.text}>DETAILS</Text>
    </View>
  );
}
