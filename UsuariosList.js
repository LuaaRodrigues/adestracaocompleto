import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = async () => {
    try {
      const response = await fetch('http://192.168.18.2:3001/usuarios');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.log('Erro ao carregar usuários:', error);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuários Cadastrados</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.usuario}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum usuário cadastrado</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  usuario: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nome: { fontSize: 18, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#555' },
});