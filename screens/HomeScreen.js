import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function HomeScreen({ navegar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Image
        source={require('../assets/Macaco1.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Aperte para navegar
      </Text>
       {/* Navegar*/}
      <Button color={"#ec3030ff"} title="Apresentação" onPress={() => navegar('Details')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  Botao1: {
    backgroundColor: 'grey'
  },
});
