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

  createSession: function(credential, receiveCurrentUser) {
    $.ajax ({
      url: '/api/session',
      data: {user: credential},
      type: 'POST',
      success: function(user) {
        receiveCurrentUser(user);
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

  createUser: function(userAttributes, receiveNewUser) {
    $.ajax ({
      url: '/api/users',
      data: {user: userAttributes},
      type: 'POST',
      success: function(user) {
        receiveNewUser(user);
      }
    })
  }
};

module.exports = ApiUtil;
