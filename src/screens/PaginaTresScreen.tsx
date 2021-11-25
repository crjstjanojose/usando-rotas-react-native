import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PaginaTresScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titlePage}>Pagina Tres Screen</Text>
      <Button
        title="Voltar pagina 02"
        onPress={() => navigation.navigate('PaginaDoisScreen')}
      />
      <Button title="Voltar pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
