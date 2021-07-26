import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {getRestaurantById} from '../api';

function RestaurantDetails({route, navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    getRestaurantById(route.params.id).then(data => {
      setData(data);
      setIsLoading(false);
    });
  }, [route.params.id]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#999999" />
      ) : (
        <>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.city}>{data.city}</Text>
          <Text>Styles: {data.cuisineStyle.join(', ')}</Text>
          <Text>Ranking: {data.ranking}</Text>
          <Text>Rating: {data.rating}</Text>
          <Text>Reviews: {data.reviewsCount}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default RestaurantDetails;
