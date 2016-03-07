var React = require('react');

var CarStore = require('../stores/car_store');
var SearchActions = require('../actions/search_actions');
var RequestForm = require('./request_form');


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
    if (!this.state.car) {
      SearchActions.fetchCarById(this.props.params.carId);
    }
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
    var car = this.state.car;
    return (
      <div  className='car-show-page-list-container'>
        <ul>
          <li className='car-show-page-price'>${car.price} Per Day</li>
          <li className='car-show-page-list'><h3>Year: </h3>{car.year}</li>
          <li className='car-show-page-list'><h3>Model: </h3>{car.model}</li>
          <li className='car-show-page-list'><h3>Make: </h3>{car.make}</li>
          <li className='car-show-page-list'><h3>Milage: </h3>{car.milage}</li>
          <li className='car-show-page-list'><h3>Type: </h3>{car.car_type}</li>
          <li className='car-show-page-list'><h3>Location:</h3>
            {car.street}
            <br/>
            {car.city}, {car.state} {car.zip_code}
            </li>
          <h2>Description: </h2>
          <p className='car-show-page-description'>{car.description}</p>
        </ul>
      </div>
    );
  },

  render: function() {
    if (this.state.car) {
      return (
        <div  className='car-show-page-container'>
          <div className='car-show-page-header'></div>
          <img className='car-show-page-img' src={this.state.car.img_url}/>
          <div  className='car-show-page-left-container'>
            {this.renderCar()}
          </div>

          <div className='car-show-page-right-container'>
            <RequestForm carId={this.props.params.carId}/>
          </div>
        </div>
      );
    }
    else {
      return (
        <div  className='car-show-page-container'>
          <h4 className='car-show-no-car-found'>There is no car found!</h4>
        </div>
      );
    }

  }
});

module.exports = CarShow;
