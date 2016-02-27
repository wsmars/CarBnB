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

  fetchCurrentUser: function(receiveCurrentUser) {
    $.ajax ({
      url: '/api/session',
      type: 'GET',
      success: function(user) {
        receiveCurrentUser(user);
        }
      })
  },

  createSession: function(credential, receiveCurrentUser, backRootPage, cleanError, showError) {
    $.ajax ({
      url: '/api/session',
      data: {user: credential},
      type: 'POST',
      success: function(user) {
        cleanError();
        backRootPage();
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

  createUser: function(userAttributes, receiveNewUser, backRootPage, cleanError, showError) {
    $.ajax ({
      url: '/api/users',
      data: {user: userAttributes},
      type: 'POST',
      success: function(user) {
        cleanError();
        backRootPage();
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
