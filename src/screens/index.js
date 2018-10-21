import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Screen1 from './Screen1';
import Screen2 from './Screen2';

export default createBottomTabNavigator({
  Screen1: {
    screen: Screen1,
  },
  Screen2: {
    screen: Screen2,
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Screen1') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }
      if (routeName === 'Screen2') {
        iconName = `ios-close-circle${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
});
