import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  console.log('Desde consolaaaa');
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Flex crece a lo largo de todo el espacio que tenga disponible, es como 100% height
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
