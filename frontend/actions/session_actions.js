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

  logIn: function(credential) {
    ApiUtil.createSession(credential, this.receiveCurrentUser);
  },

  logOut: function() {
    ApiUtil.deleteSession(this.removeCurrentUser);
  },

  signUp: function(userAttributes) {
    ApiUtil.createUser(userAttributes, this.receiveNewUser)
  }
};

module.exports = SessionActions;
