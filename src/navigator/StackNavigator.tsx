import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {PaginaDoisScreen} from '../screens/PaginaDoisScreen';
import {PaginaTresScreen} from '../screens/PaginaTresScreen';
import {PaginaUmScreen} from '../screens/PaginaUmScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaginaUmScree" component={PaginaUmScreen} />
      <Stack.Screen name="PaginaDoisScreen" component={PaginaDoisScreen} />
      <Stack.Screen
        name="PaginaUmPaginaTresScreenScree"
        component={PaginaTresScreen}
      />
    </Stack.Navigator>
  );
};
