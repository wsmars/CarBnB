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

  handleClick: function(e, car) {
    this.props.history.pushState(null, 'cars/' + car.id);
  },

  parseCars: function(jsonCars) {
    var renderArray = [];
    var that = this;
    if (jsonCars.length > 0) {
      jsonCars.forEach(function(car) {
        renderArray.push(
          <ul id={"car-" + car.id} className='car-list-element-container'>
            <div className='img-container'>
            <img onClick={that.handleClick.bind(that, null, car)} className='car-img' src={'/assets/' + car.img_url}/>
            </div>
            <li className='car-list-element'>{car.year}  {car.make}  {car.model}  <div className='price-container'>${car.price}</div></li>
          </ul>
        );
      });
    }
    else {
      renderArray.push(
        <h4 className='no-cars-loading'>
          We could not find any car that matched your query. Try a different city or landmark.
          The website currently only has Cars Data in San Francisco & Cupertino!
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
        </div>

        <div className='left-side-container'>
          {this.parseCars(this.state.cars)}
        </div>

        <div className='right-side-container'>
          <Map history={this.props.history} className='car-page-map'/>
        </div>
      </div>
    );
  }
});

module.exports = Cars;
