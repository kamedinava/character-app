import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
    console.log('Datos del personaje:', route.params.character); 
  //const { character } = route.params;
  const character = route?.params?.character;

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No se encontraron datos del personaje.</Text>
      </View>
    );
  }

  return (
        <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <Text style={styles.name}>{character.name}</Text>
        <Text
          style={[
            styles.status,
            { color: character.status === 'Dead' ? 'red' : 'green' },
          ]}
        >
          {character.status}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Species:</Text>
        <Text>{character.species}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Gender:</Text>
        <Text>{character.gender}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Origin:</Text>
        <Text>{character.origin.name}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Location:</Text>
        <Text>{character.location.name}</Text>
      </View>

      <View style={styles.episodeContainer}>
        <Text style={styles.sectionTitle}>Episodes:</Text>
        {character.episode.map((ep) => (
          <View key={ep.id} style={styles.episodeCard}>
            <Text style={styles.episodeCode}>{ep.episode}</Text>
            <Text>{ep.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  header:{ alignItems: 'center', marginBottom: 20,},
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  status:{fontSize: 18, marginTop:4,},
  card:{backgroundColor: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,},
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
      },
      episodeContainer: {
        width: '100%',
        marginTop: 20,
      },
      sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      episodeCard: {
        backgroundColor: '#e6ecf0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
      },
      episodeCode: {
        fontWeight: 'bold',
        color: '#333',
      },
      error: {
        fontSize: 18,
        color: 'red',
        marginTop: 20,
      },
  detail: {fontSize: 18, marginVertical: 4,},
});

export default DetailsScreen;
