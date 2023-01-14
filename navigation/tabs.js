import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Upcoming} from '../screens';
import {COLORS, icons} from '../constants';

import {TabIcon} from '../components';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.black,
          borderTopColor: 'transparent',
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.home} />;
          },
        }}
      />
      <Tab.Screen
        name="Play"
        component={Upcoming}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.play_button} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Upcoming}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.search} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Upcoming}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.profile} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
