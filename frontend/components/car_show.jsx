var React = require('react');

var CarStore = require('../stores/car_store');
var SearchActions = require('../actions/search_actions');

var CarShow = React.createClass({

  getInitialState: function() {
    var carId = this.props.params.carId;
    var car = CarStore.findCarById(carId);
    return {
      car: car
    };
  },

  componentDidMount: function () {
    this.token = CarStore.addListener(this._carChanged);
  },

  _carChanged: function() {
    var carId = this.props.params.carId;
    var car = CarStore.findCarById(carId);
    this.setState({ car: car });
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  renderCar: function() {
    return (
      <div>{this.state.car.make}</div>
    );
  },

  render: function() {
    if (this.state.car) {
      return this.renderCar();
    }
    else {
      return (
        <h4>There is no car found!</h4>
      );
    }

  }
});

module.exports = CarShow;
