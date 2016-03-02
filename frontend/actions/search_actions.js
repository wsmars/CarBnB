var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');


var SearchActions = {
  receiveCars: function(cars) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_CARS',
      cars: cars
    });
  },

  fetchCarsInCity: function(city) {
    ApiUtil.fetchCarsInCity(city, this.receiveCars);
  },

  fetchCarsByBounds: function(bounds) {
    ApiUtil.fetchCarsByBounds(bounds, this.receiveCars);
  }
};

module.exports = SearchActions;
