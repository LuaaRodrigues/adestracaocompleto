import React from 'react';
import { View, Text, StyleSheet, Button, Share } from 'react-native';

export default function FaleAdestrador() {
  const compartilhar = async () => {
    try {
      await Share.share({ message: 'Quero falar com um adestrador! Me ajude, por favor.' });
    } catch {
      alert('Erro ao tentar compartilhar');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fale com um Adestrador</Text>
      <Text>Entre em contato com nossos especialistas para tirar suas dúvidas.</Text>
      <Button title="Compartilhar pedido" onPress={compartilhar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, justifyContent:'center', alignItems:'center' },
  title: { fontSize:24, marginBottom:20, textAlign:'center' }
});
