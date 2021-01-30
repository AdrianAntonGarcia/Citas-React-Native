/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  console.log('Desde consolaaaa');
  return (
    <>
      <Text style={styles.encabezado}>Hola Mundo!</Text>
      <Text style={styles.encabezado}>¿Qué tal estás?</Text>
    </>
  );
};

const styles = StyleSheet.create({
  encabezado: {
    textAlign: 'center',
    marginTop: 100,
  },
});
export default App;
