import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Cita from './src/components/Cita';
import Formulario from './src/components/Formulario';

const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(false);
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

  // Muestra u oculta el formulario

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <View style={styles.contenido}>
        {mostrarForm ? (
          <>
            <TouchableHighlight
              onPress={() => mostrarFormulario()}
              style={styles.btnMostrarForm}>
              <Text style={styles.textoMostrarForm}> Mostrar Citas</Text>
            </TouchableHighlight>
            <Text style={styles.titulo}>Crea una nueva cita</Text>
            <Formulario
              citas={citas}
              setCitas={setCitas}
              guardarMostrarForm={guardarMostrarForm}
            />
          </>
        ) : (
          <>
            <TouchableHighlight
              onPress={() => mostrarFormulario()}
              style={styles.btnMostrarForm}>
              <Text style={styles.textoMostrarForm}> Crear nueva cita</Text>
            </TouchableHighlight>
            <Text style={styles.titulo}>
              {citas.length > 0
                ? 'Administra tus citas'
                : 'No hay citas, agrega una'}
            </Text>
            {/* Mejor opción para listar elementos en performance, solo carga los
            que se visualizan en pantalla */}
            <FlatList
              style={styles.listado}
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
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Flex crece a lo largo de todo el espacio que tenga disponible, es como 100% height
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#AA076B',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
