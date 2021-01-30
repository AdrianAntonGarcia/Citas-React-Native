import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Cita = ({cita}) => {
  const dialogoEliminar = () => {
    console.log('Eliminando');
  };
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar()}
          style={styles.btnElminar}>
          <Text style={styles.textoEliminar}> Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    // paddingVertical: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 14,
  },
  btnElminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cita;
