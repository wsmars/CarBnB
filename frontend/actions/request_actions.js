var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');

var RequestActions = {
  receiveMessage: function(message) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_MESSAGE',
      message: message
    });
  },

  makeRequest: function(startDate, endDate, carId) {
    ApiUtil.makeRequest(startDate, endDate, carId, this.receiveMessage);
  }
};

module.exports = RequestActions;
