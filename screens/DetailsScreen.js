import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function DetailsScreen({ navegar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apresentação do Aplicativo</Text>
      <Image
        source={require('../assets/Neyney.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Atividade de Progaramação de Aplicativos Mobile
      </Text>
        {/* Navegar*/}
      <Button color={"#cf9a45ff"} title="Sobre o Desenvolvedor" onPress={() => navegar('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
});
