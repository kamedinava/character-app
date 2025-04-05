import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar personaje..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginBottom: 16,
    alignItems: 'center',
    gap:8,
  },
  input: {
    flex:1,
    borderWidth:1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default SearchBar;
