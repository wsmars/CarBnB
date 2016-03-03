var React = require('react');
var ReactDOM = require('react-dom');
var CarStore = require('../stores/car_store');
var SearchActions = require('../actions/search_actions');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: 37.7758, lng: -122.435};
var mapMoved = false;

var Map = React.createClass({

  getInitialState: function() {
    return {cars: CarStore.all()};
  },

  componentDidMount: function(){
    console.log('map mounted');
    this.token = CarStore.addListener(this.updateCars);
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerCarCoords(),
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.state.cars.forEach(this.createMarkerFromCar);
  },

  centerCarCoords: function () {
    if (this.state.cars[0] && this.state.cars[0].lng) {
      var car = this.state.cars[0];
      return { lat: car.lat, lng: car.lng };
    } else {
      return CENTER;
    }
  },

  updateCars: function() {
    this.setState({cars: CarStore.all()});
    if (!mapMoved) {
      this.map.panTo(this.centerCarCoords());
    }
    mapMoved = false;
  },

  componentDidUpdate: function () {
    this._onChange();
  },

  _onChange: function(){
    var cars = this.state.cars;
    var toAdd = [], toRemove = this.markers.slice(0);
    cars.forEach(function(car, idx){
      var idx = -1;
      //check if car is already on map as a marker
      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].carId == car.id){
          idx = i;
          break;
        }
      }
      if(idx === -1){
        //if it's not already on the map, we need to add a marker
        toAdd.push(car);
      } else {
        //if it IS already on the map AND in the store, we don't need
        //to remove it
        toRemove.splice(idx, 1);
      }
    });
    toAdd.forEach(this.createMarkerFromCar);
    toRemove.forEach(this.removeMarker);

    if (this.props.singleCar) {
      this.map.setOptions({draggable: false});
      this.map.setCenter(this.centerCarCoords());
    }
  },

  componentWillUnmount: function(){
    console.log("map UNmounted");
    this.token.remove();
  },

  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      mapMoved = true;
      var bounds = that.map.getBounds();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      //actually issue the request
      var bounds = {
        northEast: northEast,
        southWest: southWest
      };
      SearchActions.fetchCarsByBounds(bounds);
    });
    // google.maps.event.addListener(this.map, 'click', function(event) {
    //   var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    //   that.props.onMapClick(coords);
    // });
  },
  createMarkerFromCar: function (car) {
    var that = this;
    var pos = new google.maps.LatLng(car.lat, car.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      carId: car.id
    });
    marker.addListener('click', function () {
      that.props.history.pushState(null, 'cars/' + this.carId);
    });
    this.markers.push(marker);
  },
  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].carId === marker.carId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },
  render: function(){
    return ( <div className="map" ref="map">Map</div>);
  }
});

module.exports = Map;
