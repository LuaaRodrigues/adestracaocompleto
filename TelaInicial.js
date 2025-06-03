import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🐶✨</Text>
      <Text style={styles.title}>Bem-vindo ao AdestraCão!</Text>
      <Text style={styles.subtitle}>Seu app para treinar e cuidar do seu melhor amigo.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        activeOpacity={0.75}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 16, backgroundColor: '#FADADD' }]}
        onPress={() => navigation.navigate('Cadastro')}
        activeOpacity={0.75}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F6F0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6B5B95',
    marginBottom: 12,
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#3D405B',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#B8D8D8',
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#2E2E2E',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: '#3D405B',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.7,
  },
});
