import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function AboutScreen({ navegar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Desenvolvedor</Text>
      <Image
        source={require('../assets/Dono-do-site.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Feito por Kevin de  Souza Novais (contato: kevindsnovais@gmail.com)
        <p></p>
        Obs: Não fiz o projeto com stack navigator pois faltei na aula passada, e tive que pesquisar para achar outro meio de navegação de tela
      </Text>
      <Button color={"#8928d8ff"} style={styles.botaoabout} title="Voltar para Início" onPress={() => navegar('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6b8f3ff',
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
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  botaoabout: {
    backgroundColor: 'Grey',
  },
});
