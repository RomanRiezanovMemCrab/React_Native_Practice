import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {ContactsScreen} from '../screens/contacts/contacts-screen';
import {DetailsScreen} from '../screens/details/details-screen';
import {ROUTES} from '../navigation/navigator-config';

const Drawer = createDrawerNavigator();

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const handleStart = () => {
    props.navigation.navigate(ROUTES.WELCOME);
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Welcome page" onPress={handleStart} />
    </DrawerContentScrollView>
  );
};

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.CONTACTS}
      drawerContent={CustomDrawer}>
      <Drawer.Screen name={ROUTES.CONTACTS} component={ContactsScreen} />
    </Drawer.Navigator>
  );
}
