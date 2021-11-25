import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PaginaUmScreen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.titlePage}>Pagina Um Screen</Text>
      <Button
        title="Ir Pagina 02"
        onPress={() => navigation.navigate('PaginaDoisScreen')}
      />

      <Text style={styles.titlePage}>Navegar com Argumento</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botaoNavegar, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={styles.textoBotaoNavegar}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botaoNavegar, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.textoBotaoNavegar}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
