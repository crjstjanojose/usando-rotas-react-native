import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabUmScreen} from '../screens/TabUmScreen';
import {colores} from '../theme/appTheme';
import {StackNavigator} from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'TabUmScreen':
              iconName = 'mail-outline';
              break;
            case 'TabDoisScreen':
              iconName = 'menu-outline';
              break;
            case 'StackNavigator':
              iconName = 'grid-outline';
              break;
          }

          return (
            <Text style={{color}}>
              <Icon name={iconName} size={30} color={colores.white} />
            </Text>
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="TabUmScreen"
        options={{title: 'TAB 01'}}
        component={TabUmScreen}
      />
      <BottomTabAndroid.Screen
        name="TabDoisScreen"
        options={{title: 'TAB 02'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'STACK'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
          color: colores.primary,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'TabUmScreen':
              iconName = 'T1';
              break;
            case 'TabDoisScreen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'T3';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
        name="TabUmScreen"
        options={{
          title: 'TAB 01',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={TabUmScreen}
      /> */}
      <BottomTabIOS.Screen
        name="TabUmScreen"
        options={{title: 'TAB 01'}}
        component={TabUmScreen}
      />
      <BottomTabIOS.Screen
        name="TabDoisScreen"
        options={{title: 'TAB 02'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'STACK'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
