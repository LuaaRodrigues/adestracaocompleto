import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Perfil({ route, navigation }) {
  const usuario = route.params?.usuario;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🐾</Text>
      <Text style={styles.titulo}>Perfil do Usuário</Text>

      {usuario ? (
        <>
          <Text style={styles.info}>Nome: {usuario.nome}</Text>
          <Text style={styles.info}>Email: {usuario.email}</Text>
        </>
      ) : (
        <Text style={styles.info}>Usuário não encontrado.</Text>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.textoBotao}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B5B95',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#3D405B',
  },
  botao: {
    marginTop: 30,
    backgroundColor: '#B8D8D8',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  textoBotao: {
    fontSize: 16,
    color: '#3D405B',
    fontWeight: 'bold',
  },
});



