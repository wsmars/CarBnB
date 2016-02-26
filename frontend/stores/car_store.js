var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CarStore = new Store(AppDispatcher);
var _cars = [];

CarStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case "RECEIVE_CARS":
    this.resetCars(payload.cars);
    CarStore.__emitChange();
    break;
  }
};

CarStore.all = function () {
  return _cars.slice(0);
};

CarStore.resetCars = function (cars) {
  _cars = cars;
};

module.exports = CarStore;
