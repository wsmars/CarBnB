var React = require('react');
var Link = require('react-router').Link;
var CarStore = require('../stores/car_store');
var SearchActions = require('../actions/search_actions')
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Search = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {cars: [], searchValue: ''};
  },

  componentDidMount: function() {
    CarStore.addListener(this.updateCars);
  },

  updateCars: function() {
    this.setState({cars: CarStore.all()});
  },

  handleSubmit: function(e) {
    e.preventDefault(); //let the output stay in same page.
    SearchActions.fetchCarsInCity(this.state.searchValue);
  },

  parseCars: function(jsonCars) {
    var renderArray = [];
    jsonCars.forEach(function(car) {
      renderArray.push(
        <ul>
          <li>{car.make}</li>
          <li>{car.model}</li>
          <li>{car.year}</li>
        </ul>
      );
    });
    return renderArray;
  },

  render: function() {

    return (
      <div className='searchbar-container'>
        <form onSubmit={this.handleSubmit} className='search-bar'>
          <span className='search-bar-span screen-reader-only'>Where do you want to go?</span>
          <input type="text" placeholder="Where do you want to go?" className='search-bar-input' valueLink={this.linkState('searchValue')} />
          <input type="submit" className='search-bar-submit-btn btn-primary' value="Search"/>
        </form>
        {this.parseCars(this.state.cars)}
      </div>
    );
  }
});

module.exports = Search;
