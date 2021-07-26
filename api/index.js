import data from './data.json';

const DELAY = 1000;

function getAllRestaurants() {
  return new Promise(resolve => setTimeout(() => resolve(data), DELAY));
}

function getRestaurantById(id) {
  const response = data.filter(item => item.id === Number(id))[0];
  return new Promise(resolve => setTimeout(() => resolve(response), DELAY));
}

function getCuisineOptions() {
  const response = [
    ...new Set(
      getAllRestaurants()
        .map(item => item.cuisineStyle)
        .flat(),
    ),
  ].sort();
  return new Promise(resolve => setTimeout(() => resolve(response), DELAY));
}

function getCityOptions() {
  const response = [
    ...new Set(getAllRestaurants().map(item => item.city)),
  ].sort();
  return new Promise(resolve => setTimeout(() => resolve(response), DELAY));
}

export {
  getAllRestaurants,
  getRestaurantById,
  getCuisineOptions,
  getCityOptions,
};
