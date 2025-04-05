import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Pagination = ({ onPrevious, onNext, hasPrevious, hasNext }) => {
  return (
    <View style={styles.container}>
      <Button title="Anterior" onPress={onPrevious} disabled={!hasPrevious} />
      <Button title="Siguiente" onPress={onNext} disabled={!hasNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default Pagination;
