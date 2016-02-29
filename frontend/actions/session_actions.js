var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');

var SessionActions = {
  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_CURRENT_USER',
      user: user
    });
  },

  removeCurrentUser: function() {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_CURRENT_USER'
    });
  },

  receiveNewUser: function(user) {
    AppDispatcher.dispatch({
      actionType: 'RECEIVE_NEW_USER',
      user: user
    });
  },

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

  logIn: function(credential) {
    ApiUtil.createSession(credential, this.receiveCurrentUser, this.cleanError, this.showError);
  },

  logOut: function() {
    ApiUtil.deleteSession(this.removeCurrentUser);
  },

  signUp: function(userAttributes) {
    ApiUtil.createUser(userAttributes, this.receiveNewUser, this.cleanError, this.showError)
  }
};

module.exports = SessionActions;
