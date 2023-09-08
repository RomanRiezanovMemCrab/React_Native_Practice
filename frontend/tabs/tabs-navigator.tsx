import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../navigation/navigator-config';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS, tabIconNames} from '../theme/theme';
import {TabRoutesList} from '../navigation/root-navigator';
import {HomeScreen} from '../screens/home/home-screen';
import {ContactsScreen} from '../screens/contacts/contacts-screen';
import {MoviesScreen} from '../screens/movies/movies-screen';
import {tabBarStyle} from './tabs.style';

const Tab = createBottomTabNavigator<TabRoutesList>();

export const TabsScreen: React.FC = () => (
  <Tab.Navigator
    initialRouteName={ROUTES.HOME}
    screenOptions={({route}) => ({
      tabBarStyle: tabBarStyle,
      tabBarIcon: ({color}) => {
        const iconName = tabIconNames[route.name];
        return <FontAwesome5 name={iconName || ''} color={color} size={25} />;
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.netflix,
      tabBarInactiveTintColor: COLORS.inactive,
      headerShown: false,
    })}>
    <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
    <Tab.Screen name={ROUTES.MOVIES} component={MoviesScreen} />
    <Tab.Screen name={ROUTES.CONTACTS} component={ContactsScreen} />
  </Tab.Navigator>
);
