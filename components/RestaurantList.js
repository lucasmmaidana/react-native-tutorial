import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import RestaurantCard from './RestaurantCard';

function RestaurantList(props) {
  return (
    <ScrollView style={styles.list}>
      {props.restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} data={restaurant} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {},
});

export default RestaurantList;
