var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var MessageStore = new Store(AppDispatcher);

var _error = [];
var _message = [];

MessageStore.error = function() {
  return _error.slice(0);
};

MessageStore.message = function() {
  return _message.slice(0);
};

MessageStore.receiveError = function(error) {
  _error = error;
};

MessageStore.receiveMessage = function(message) {
  _message = message;
};

MessageStore.cleanMessage = function() {
	_error = [];
  _message = [];
};

MessageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ERROR":
      this.receiveError(payload.error);
      MessageStore.__emitChange();
      break;
    case "CLEAN_ERROR":
    	this.cleanMessage();
    	MessageStore.__emitChange();
    	break;
    case "RECEIVE_MESSAGE":
      this.receiveMessage(payload.message);
      MessageStore.__emitChange();
      break;
  }
};

module.exports = MessageStore;
