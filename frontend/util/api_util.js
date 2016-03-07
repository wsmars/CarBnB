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

  fetchCarById: function(carId, receiveSingleCar) {
    $.ajax ({
      url: '/api/cars/' + carId,
      type: 'GET',
      success: function(car) {
        receiveSingleCar(car);
        }
      })
  },

  makeRequest: function(startDate, endDate, carId, receiveRequest, showMessage) {
    $.ajax ({
      url: '/api/requests',
      data: {request: {start_date: startDate, end_date: endDate, car_id: carId}},
      type: 'POST',
      success: function(request) {
        receiveRequest(request);
      },
      error: function(error){
        showMessage(error.responseJSON.message);
      }
    })
  },

  fetchLatLng: function(street, city, state, receiveLatLng) {
    $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + '+' + street + '+' + city + '+' + state + '&key=AIzaSyD8k-wUnlZWL0lIp9n0VbsoIG0wDhOZcZE',
      type: 'GET',
      success: function(result) {
        debugger;
        var location = result.results[0].geometry.location
        receiveLatLng(location);
      }
    })
  },

  createCar: function(carAttributes, redirectPage, cleanError, showError) {
    $.ajax ({
      url: '/api/cars',
      data: {car: carAttributes},
      type: 'POST',
      success: function(response) {
        cleanError();
        redirectPage(response.id)
      },
      error: function(error){
        showError(error.responseJSON.message);
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
      }
    })
  }
};

module.exports = ApiUtil;
