import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores, styles} from '../theme/appTheme';

export const TabUmScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, top}}>
      <Text style={styles.titlePage}>TAB UM SCREEN</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="attach-outline" size={80} color={colores.primary} />
        <Icon name="bonfire-outline" size={80} color={colores.primary} />
        <Icon
          name="chatbubble-ellipses-outline"
          size={80}
          color={colores.primary}
        />
        <Icon name="mail-outline" size={80} color={colores.primary} />
        <Icon name="lock-closed-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};
