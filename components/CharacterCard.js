import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
      <Text style={styles.name}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Specie: {character.species}</Text>
      <Text>Gender: {character.gender}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 12,
    overflow:'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info:{
    padding:10,
    justifyContent:'center',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CharacterCard;
