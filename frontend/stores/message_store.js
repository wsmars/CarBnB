var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var MessageStore = new Store(AppDispatcher);

var _message = [];

MessageStore.error = function() {
  return _message.slice(0);
};

MessageStore.receiveError = function(message) {
  _message = message;
};

MessageStore.cleanMessage = function() {
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
  }
};

module.exports = MessageStore;