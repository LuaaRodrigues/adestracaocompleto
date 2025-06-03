import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, ScrollView } from 'react-native';

export default function Conquistas() {
  const conquistas = [
    '🐶 Sentar',
    '🐾 Dar a pata',
    '🎯 Ficar parado',
    '🚶‍♂️ Caminhar com guia'
  ];

  const compartilharConquistas = async () => {
    try {
      const mensagem = conquistas.join('\n');
      await Share.share({ message: `Confira as conquistas do meu cãozinho no app AdestraCão:\n\n${mensagem}` });
    } catch (error) {
      // tratar erro se quiser
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Minhas Conquistas</Text>
      {conquistas.map((item, index) => (
        <Text key={index} style={styles.item}>{item}</Text>
      ))}
      <TouchableOpacity style={styles.botao} onPress={compartilharConquistas} activeOpacity={0.7}>
        <Text style={styles.textoBotao}>Compartilhar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#FFFAF0',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B705C',
    marginTop: 60,        // aqui: aumenta a margem superior para afastar do topo
    marginBottom: 24,
  },
  item: {
    fontSize: 20,
    marginVertical: 8,
    color: '#907B6B',
  },
  botao: {
    marginTop: 40,
    backgroundColor: '#A3B18A',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 25,
    shadowColor: '#555',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
