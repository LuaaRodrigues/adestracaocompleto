// screens/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4F8EF7',
    paddingVertical: 16,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});