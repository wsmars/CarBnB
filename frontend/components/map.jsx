var React = require('react');
var ReactDOM = require('react-dom');
var CarStore = require('../stores/car_store');
var MapStore = require('../stores/map_store');
var SearchActions = require('../actions/search_actions');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng(),
  };
}

var CENTER = {lat: 37.7758, lng: -122.435};
var mapMoved = false;
var _markers = {};

var Map = React.createClass({

  getInitialState: function() {
    return {cars: CarStore.all(),
            location: MapStore.all()
           };
  },

  componentDidMount: function(){
    console.log('map mounted');
    this.token1 = CarStore.addListener(this.updateCars);
    this.token2 = MapStore.addListener(this.updateLocation);
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.centerCarCoords(),
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
    this.markers = [];
    this.state.cars.forEach(this.createMarkerFromCar);
  },

  centerCarCoords: function () {
    if (this.state.location) {
      var center = this.props.center
      return { lat: this.state.location.lat, lng: this.state.location.lng };
    } else {
      return CENTER;
    }
  },

  updateCars: function() {
    this.setState({cars: CarStore.all()});
  },

  updateLocation: function() {
    this.setState({location: MapStore.all()})
    this.map.panTo(this.centerCarCoords());
  },

  componentDidUpdate: function (oldstate) {
    this._onChange();
    var that = this;

    var toggleBounce = function(marker, status) {
        if (status) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        } else {
          marker.setAnimation(null);
        }
      };

    for (var key in _markers) {
      var carDoc = document.getElementById("car-" + key);
      if (carDoc) {
        (function(k){
          google.maps.event.addDomListener(carDoc,
            "mouseenter",
            function() {
              toggleBounce(_markers[k], true);
            });
            google.maps.event.addDomListener(carDoc,
              "mouseleave",
              function() {
                toggleBounce(_markers[k], false);
              });
        })(key);
      }
    }
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
    this.token1.remove();
    this.token2.remove();
    this.token3.remove();
  },

  registerListeners: function(){
    var that = this;
    this.token3 = google.maps.event.addListener(this.map, 'idle', function() {
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

    _markers[car.id] = marker;
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
