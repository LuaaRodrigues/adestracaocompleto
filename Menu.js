import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Menu({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🐾 Menu Principal</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('TelaInicial')}>
        <Text style={styles.textoBotao}>Tela Inicial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('AulaAoVivo')}>
        <Text style={styles.textoBotao}>Aula Ao Vivo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Conquistas')}>
        <Text style={styles.textoBotao}>Conquistas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('FaleAdestrador')}>
        <Text style={styles.textoBotao}>Fale com Adestrador</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.textoBotao}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('UsuariosList')}>
        <Text style={styles.textoBotao}>Ver Usuários</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F6F0',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B5B95',
    marginBottom: 30,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#B8D8D8',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotao: {
    color: '#3D405B',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
