import {Text, View} from 'react-native';
import {styles} from './contacts.style';

export function ContactsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CONTACTS</Text>
      <Text>Swipe right to show the drawer menu</Text>
    </View>
  );
}
