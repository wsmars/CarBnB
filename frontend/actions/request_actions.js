var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');

var RequestActions = {
  showMessage: function(message) {
    AppDispatcher.dispatch({
      actionType: 'MESSAGE',
      message: message
    });
  },

  makeRequest: function(startDate, endDate, carId, callback) {
    ApiUtil.makeRequest(startDate, endDate, carId, callback, this.showMessage);
  }
};

module.exports = RequestActions;
