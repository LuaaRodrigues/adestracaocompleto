// CadastroUsuario.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function CadastroUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const IP_BACKEND = 'http://192.168.x.x:3000'; // <== troque pelo IP da sua máquina

  const handleCadastrar = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`${IP_BACKEND}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
      } else {
        Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
      }
    } catch (error) {
      Alert.alert('Erro', `Erro ao conectar com o servidor: ${error.message}`);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Cadastrar" onPress={handleCadastrar} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 44,
  },
});