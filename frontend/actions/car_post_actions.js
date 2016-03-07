var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');

var CarPostActions = {

  showError: function(error) {
    AppDispatcher.dispatch({
      actionType: 'ERROR',
      error: error
    });
  },

  cleanError: function() {
    AppDispatcher.dispatch({
      actionType: 'CLEAN_ERROR',
    });
  },

  createCar: function(carAttributes, redirectPage) {
    ApiUtil.createCar(carAttributes, redirectPage, this.cleanError, this.showError)
  }
};

module.exports = CarPostActions;
