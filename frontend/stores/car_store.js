var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CarStore = new Store(AppDispatcher);
var _cars = [];

CarStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case "RECEIVE_CARS":
    this.receiveCars(payload.cars);
    CarStore.__emitChange();
    break;
  case "RECEIVE_SINGLE_CAR":
    this.receiveSingleCar(payload.car);
    CarStore.__emitChange();
    break;
  }
};

CarStore.all = function () {
  return _cars.slice(0);
};

CarStore.receiveCars = function (cars) {
  _cars = cars;
};

CarStore.receiveSingleCar = function (car) {
  _cars = [car]
};

CarStore.findCarById = function (id) {
  var returnObj;
  _cars.forEach(function (car) {
    if (car.id == id) {
      returnObj = car;
    }
  });
  return returnObj;
};

module.exports = CarStore;
