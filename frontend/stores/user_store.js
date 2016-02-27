var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);

var _user = undefined;

UserStore.receiveUser = function(user) {
  _user = user;
};

UserStore.removeUser = function() {
  _user = undefined;
};

UserStore.all = function() {
  return _user;
};

UserStore.isLoggedIn = function() {
  if (_user) {
    return true;
  }
  else {
    return false;
  }
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_CURRENT_USER":
      this.receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case "RECEIVE_NEW_USER":
      this.receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case "REMOVE_CURRENT_USER":
      this.removeUser();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
