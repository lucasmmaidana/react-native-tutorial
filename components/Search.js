import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

function Search(props) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        onChangeText={props.handleOnChange}
        placeholder="Search by name"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  input: {
    borderColor: 'gray',
    //borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    paddingVertical: 14,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default Search;
