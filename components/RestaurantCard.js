import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function RestaurantCard(props) {
  const navigation = useNavigation();

  const {id, name, city, cuisineStyle} = props.data;
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {id: id})}
      style={styles.card}
      android_ripple={{color: '#999'}}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.city}>{city}</Text>
        <Text>Styles: {cuisineStyle.join(', ')}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 18,
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  city: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RestaurantCard;
