import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PaginaDoisScreen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: 'Página Principal',
  //     headerBackTitle: 'Voltar',
  //   });
  // }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titlePage}> Pagina Dois Screen</Text>
      <Button
        title="Ir para pagina 03"
        onPress={() => navigation.navigate('PaginaTresScreen')}
      />
    </View>
  );
};
