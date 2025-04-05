import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import CharacterCard from './CharacterCard';
import { useNavigation } from '@react-navigation/native';

const CharacterList = ({ characters }) => {
    const navigation = useNavigation();
  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (<TouchableOpacity 
        onPress={()=> navigation.navigate('Detalle', {character: item})}>
            <View style={styles.card}>
                <Image source={{uri: item.image}} style = {styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>{item.status} - {item.species}</Text>
                    <Text>{item.gender}</Text>
                </View>
            </View>
        </TouchableOpacity>)}
    />
  );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
      },
      image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
      },
      info: {
        flex: 1,
      },
      name: {
        fontWeight: 'bold',
        fontSize: 16,
      },
});

export default CharacterList;
