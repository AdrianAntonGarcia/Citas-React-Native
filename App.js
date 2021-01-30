import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './src/components/Cita';
const App = () => {
  // Definir el state de citas

  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Adrián', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Itzel', sintomas: 'No duerme'},
    {id: '3', paciente: 'Native', propietario: 'Josue', sintomas: 'No canta'},
  ]);

  // Elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.titulo}>
        {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}
      </Text>
      {/* Mejor opción para listar elementos en performance, solo carga los que
      se visualizan en pantalla  */}
      <FlatList
        data={citas}
        keyExtractor={(cita) => cita.id}
        renderItem={({item}) => (
          <Cita eliminarPaciente={eliminarPaciente} cita={item} />
        )}
      />
      {/* {citas.map((cita) => (
        <View key={cita.id}>
          <Text>{cita.paciente}</Text>
        </View>
      ))} */}
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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
