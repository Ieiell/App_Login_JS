import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

const TextoAninhado = () => {
  const[titulo, setTitulo] = useState("Texto de elemento filho");

  const modificaTexto = () => {
    setTitulo("Esse texto está sendo exibido pois o primeiro elemento de texto foi pressionado/tocado");

  };

  return (
    <Text style={StyleSheet.baseText}>
      <Text style={StyleSheet.titulo} onPress={modificaTexto}>
        {titulo}
        {"\n"}
        {"\n"}
      </Text>
    </Text>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily:"Verdana",
    marginTop:50,
    marginLeft:10
  },

  titulo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});



