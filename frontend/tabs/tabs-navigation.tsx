import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DetailsScreen} from '../screens/details/details-screen';
import {ProfileScreen} from '../screens/profile/profile-screen';
import {ROUTES} from '../navigation/navigator-config';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {DrawerNavigator} from '../drawer/drawer-navigation';
import {ModalsScreen} from '../screens/modals/modals-screen';
import {COLORS, tabIconNames} from '../theme/theme';
import {TabRoutesList} from '../navigation/root-navigator';

const Tab = createBottomTabNavigator<TabRoutesList>();

export const TabsNavigator: React.FC = () => (
  <Tab.Navigator
    initialRouteName={ROUTES.PROFILE}
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        const iconName = tabIconNames[route.name];
        return <FontAwesome5 name={iconName || ''} color={color} size={25} />;
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.white,
      tabBarInactiveTintColor: COLORS.blue,
      tabBarActiveBackgroundColor: COLORS.blue,
      headerShown: false,
    })}>
    <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    <Tab.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
    <Tab.Screen name={ROUTES.DRAWER} component={DrawerNavigator} />
    <Tab.Screen name={ROUTES.MODALS} component={ModalsScreen} />
  </Tab.Navigator>
);
