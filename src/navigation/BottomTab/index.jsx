import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MarketsScreen from '../../screens/Market';
import WatchlistsScreen from '../../screens/Watchlists';
import NewsScreen from '../../screens/News';
import NotificationsScreen from '../../screens/Notifications';
import MoreScreen from '../../screens/More';
import Subscription from '../../screens/Subscription';
import {colors} from '../../utilities';

const Tab = createBottomTabNavigator();

function CustomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Markets') {
            iconName = 'analytics';
          } else if (route.name === 'Watchlists') {
            iconName = 'list';
          } else if (route.name === 'News') {
            iconName = 'newspaper';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
          } else if (route.name === 'More') {
            iconName = 'menu';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: 'gray', // Set the inactive tab icon color to gray
        style: {
          borderTopWidth: 2, // Add a top border
          borderTopColor: colors.blue, // Set the top border color to purple
          backgroundColor: 'transparent', // Set the background color of the tab bar to transparent
        },
      }}
    >
      <Tab.Screen name="Markets" component={MarketsScreen} />
      <Tab.Screen name="Watchlists" component={WatchlistsScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="More" component={Subscription} />
    </Tab.Navigator>
  );
}

export default CustomTabBar;
