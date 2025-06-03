import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.18.2:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok && data.usuario) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tabs', params: { usuario: data.usuario } }],
        });
      } else {
        Alert.alert('Erro', data.erro || 'Email ou senha incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🐶</Text>
      <Text style={styles.titulo}>AdestraCão</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} color="#6B5B95" />

      <Text
        style={styles.cadastro}
        onPress={() => navigation.navigate('Cadastro')}
      >
        Não tem conta? Cadastre-se
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FAF7F0',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6B5B95',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#fff',
  },
  cadastro: {
    marginTop: 20,
    color: '#5D4037',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
