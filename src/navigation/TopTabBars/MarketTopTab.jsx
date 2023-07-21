import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tasi from '../../screens/Market/Tasi';
import Nomu from '../../screens/Market/Nomu';
import Tm30 from '../../screens/Market/Tm30';
import { colors } from '../../utilities';

const Tab = createMaterialTopTabNavigator();

function MarketTopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.blue,
        },
        tabBarActiveTintColor: colors.green5,
        tabBarInactiveTintColor: colors.inactiveTabColor,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.green5,
          height: 2,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'TASI',
        }}
        name="Tasi"
        component={Tasi}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'NOMU' }}
        name="Nomu"
        component={Nomu}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'TM30' }}
        name="Tm30"
        component={Tm30}
      />
    </Tab.Navigator>
  );
}

export default MarketTopTab;
