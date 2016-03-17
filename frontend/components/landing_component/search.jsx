var React = require('react');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CarStore = require('../../stores/car_store');
var SearchActions = require('../../actions/search_actions');

var Search = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {searchValue: ''};
  },

  handleSubmit: function(e) {
    var transfer = function(string) {
      var array = string.split(' ');
      var outPutArray = array.map(function(string) {
        return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1)
      });
      return outPutArray.join(' ');
    };
    // window.NotFirst = false;
    var city = transfer(this.state.searchValue);
    e.preventDefault(); //let the output stay in same page.
    SearchActions.searchCarsInCity(city);
    this.props.history.pushState(null, '/cars', { city: city }); //push city to path, then refresh page will fetch Cars by city again.
  },

  render: function() {

    return (
      <div className='searchbar-container'>
        <form onSubmit={this.handleSubmit} className='search-bar'>
          <span className='search-bar-span screen-reader-only'>Where do you want to go?</span>
          <input type="text" placeholder="Where do you want to go?" className='search-bar-input' valueLink={this.linkState('searchValue')} />
          <input type="submit" className='search-bar-submit-btn btn-primary' value="Search"/>
        </form>
      </div>
    );
  }
});

module.exports = Search;
