var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');


var SearchActions = {
  receiveCars: function(cars) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_CARS',
      cars: cars
    });
  },

  receiveSingleCar: function(car) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_SINGLE_CAR',
      car: car
    });
  },

  fetchCarsInCity: function(city) {
    ApiUtil.fetchCarsInCity(city, this.receiveCars);
  },

  fetchCarsByBounds: function(bounds) {
    ApiUtil.fetchCarsByBounds(bounds, this.receiveCars);
  },

  fetchCarById: function(carId) {
    ApiUtil.fetchCarById(carId, this.receiveSingleCar);
  }
};

module.exports = SearchActions;
