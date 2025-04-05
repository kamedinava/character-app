import React, {useState} from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries'; 
import SearchBar from '../components/SearchBar';
import CharacterList from '../components/CharacterList';
import Pagination from '../components/Pagination';

const HomeScreen = ({navigation}) => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [committedSearch, setCommitedSearch] = useState('');

    const handleSearch =() => {
        setCommittedSearch(searchTerm);
        setPage(1);
    }

    const {loading, error, data} = useQuery(GET_CHARACTERS, {
        variables: {page, name:searchTerm},
    });

    const handlePrevious = () => setPage((prev) => Math.max(prev -1, 1));
    const handleNext = () => setPage((prev) => prev + 1);


    return (
    <View style={styles.container}>
      <SearchBar value= {searchTerm} onChange={setSearchTerm} onSearch={handleSearch}/>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text> Error al cargar personajes</Text>}

      {!loading && data?.characters?.results.length > 0 ? (
         <CharacterList characters= {data.characters.results} navigation={navigation}/>

      ): (
        !loading && <Text style={styles.noResults}> No existe en este multiverso!</Text>
      )}
      <Pagination 
      onPrevious={handlePrevious}
      onNext={handleNext}
      hasPrevious={!!data?.characters?.info?.prev}
      hasNext={!!data?.characters?.info?.next}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  noResults :{
    textAlign:'center',
    marginTop: 20,
    fontSize:16,
    color: '#666',
  },
});

export default HomeScreen;
