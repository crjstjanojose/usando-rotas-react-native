import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {PaginaDoisScreen} from '../screens/PaginaDoisScreen';
import {PaginaTresScreen} from '../screens/PaginaTresScreen';
import {PaginaUmScreen} from '../screens/PaginaUmScreen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  PaginaUmScreen: undefined;
  PaginaDoisScreen: undefined;
  PaginaTresScreen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PaginaUmScreen"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="PaginaUmScreen"
        options={{title: 'Página 01'}}
        component={PaginaUmScreen}
      />
      <Stack.Screen
        name="PaginaDoisScreen"
        options={{title: 'Página 02'}}
        component={PaginaDoisScreen}
      />
      <Stack.Screen
        name="PaginaTresScreen"
        options={{title: 'Página 03'}}
        component={PaginaTresScreen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
