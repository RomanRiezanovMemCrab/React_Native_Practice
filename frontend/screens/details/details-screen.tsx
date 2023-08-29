import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {RootStackPropsNavigation} from '../../navigation/root-navigator';
import {ROUTES} from '../../navigation/navigator-config';

export function DetailsScreen() {
  const navigation = useNavigation<RootStackPropsNavigation>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(ROUTES.HOME)}
      />
    </View>
  );
}
