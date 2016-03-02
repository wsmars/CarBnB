var AppDispatcher = require('../dispatcher/dispatcher');

var ApiUtil = {
  fetchCarsInCity: function(city, receiveCars) {
    $.ajax ({
      url: '/api/cars',
      data: {car: {city: city}},
      type: 'GET',
      success: function(cars) {
        receiveCars(cars);
        }
      })
  },

  fetchCarsByBounds: function(bounds, receiveCars) {
    $.ajax ({
      url: '/api/cars',
      data: {car: {bounds: bounds}},
      type: 'GET',
      success: function(cars) {
        receiveCars(cars);
        }
      })
  },

  fetchLocationCoor: function(address, city, state, zipcode) {
    var location = address + '+' + city + '+' + state + '+' + zipcode;
    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyD8k-wUnlZWL0lIp9n0VbsoIG0wDhOZcZE',
      type: 'GET'
    })
  },

  fetchCurrentUser: function(receiveCurrentUser) {
    $.ajax ({
      url: '/api/session',
      type: 'GET',
      success: function(user) {
        receiveCurrentUser(user);
        }
      })
  },

  createSession: function(credential, receiveCurrentUser, cleanError, showError) {
    $.ajax ({
      url: '/api/session',
      data: {user: credential},
      type: 'POST',
      success: function(user) {
        cleanError();
        receiveCurrentUser(user);
      },
      error: function(error){
        showError(error.responseJSON.message);
      // do something with errors
      }
    })
  },

  deleteSession: function(removeCurrentUser) {
    $.ajax ({
      url: '/api/session',
      type: 'DELETE',
      success: function() {
        removeCurrentUser();
      }
    })
  },

  createUser: function(userAttributes, receiveNewUser, cleanError, showError) {
    $.ajax ({
      url: '/api/users',
      data: {user: userAttributes},
      type: 'POST',
      success: function(user) {
        cleanError();
        receiveNewUser(user);
      },
      error: function(error){
        showError(error.responseJSON.message);
      // do something with errors
      }
    })
  }
};

module.exports = ApiUtil;
