import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {getAllRestaurants} from '../api';
import Search from '../components/Search';
import RestaurantList from './../components/RestaurantList';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getAllRestaurants().then(data => {
      setRestaurants(data);
      setFilteredRestaurants(data);
      setIsLoading(false);
    });
  }, []);

  const handleSearch = query => {
    setFilteredRestaurants(
      restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#999999" />
      ) : (
        <>
          <Search handleOnChange={handleSearch} />
          <RestaurantList restaurants={filteredRestaurants} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Home;
