var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var MapStore = new Store(AppDispatcher);

var _location = undefined;

MapStore.receiveLocation = function(location) {
  _location = location;
};

MapStore.removeLocation = function() {
  _location = undefined;
};

MapStore.all = function() {
  return _location;
};

MapStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "RECEIVE_LOCATION":
      this.receiveLocation(payload.location);
      MapStore.__emitChange();
      break;
  }
};

module.exports = MapStore;
