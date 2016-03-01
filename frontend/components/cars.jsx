var React = require('react');
var Link = require('react-router').Link;

var CarStore = require('../stores/car_store');
var SearchActions = require('../actions/search_actions');
var Search = require('./landing_component/search');
var Map = require('./map');

var Cars = React.createClass({

  getInitialState: function() {
    return {cars: CarStore.all()};
  },

  componentDidMount: function() {
    this.token = CarStore.addListener(this.updateCars);
    SearchActions.fetchCarsInCity(this.props.location.query.city);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  updateCars: function() {
    this.setState({cars: CarStore.all()});
  },

  parseCars: function(jsonCars) {
    var renderArray = [];
    if (jsonCars.length > 0) {
      jsonCars.forEach(function(car) {
        renderArray.push(
          <ul>
            <li>{car.year}  {car.make}  {car.model}  ${car.price}</li>
            <img classNmae='car-img' src={'/assets/' + car.img_url}/>
          </ul>
        );
      });
    }
    else {
      renderArray.push(
        <h4 className='no-cars-loading'>
          We couldn find any car that matched your query. Try a different city or landmark.
        </h4>
      );
    }
    return renderArray;
  },

  render: function() {
    return (
      <div className='cars-page'>
        <div className='cars-page-header-container'>
          <div className='logo-border help-border sign-up-border sign-in-border'/>
          <div className='cars-page-serach-bar-container'>
            <Search history={this.props.history}/>
          </div>
        </div>

        <div className='left-side-container'>
          {this.parseCars(this.state.cars)}
        </div>

        <div className='right-side-container'>
          <Map className='car-page-map'/>
        </div>
      </div>
    );
  }
});

module.exports = Cars;