var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var UserStore = require('../stores/user_store');
var MessageStore = require('../stores/message_store');
var ApiUtil = require('../util/api_util');
var CarPostActions =require('../actions/car_post_actions');

var YEAR = [];
var generateYear = function () {
  for (var i = 1960; i <= 2017; i++) {
    YEAR.push(i);
  }
};
generateYear();

var TYPE = ['Economy', 'Compact', 'Midsize', 'Standard', 'Fullsize', 'Premium',
            'Luxury', 'Convertible', 'Minivan', 'SUV', 'Sports Car'];

var STATE = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL',
         'IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT',
         'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI',
         'SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

var CarPost = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      currentUser: UserStore.all(),
      error: [],
      make: '',
      model: '',
      year: '',
      milage: '',
      price: '',
      type: '',
      street: undefined,
      city: undefined,
      state: undefined,
      zipcode: undefined,
      userId: '',
      lat: '',
      lng: '',
      description: ''
    });
  },

  componentDidMount: function() {
    this.token1 = UserStore.addListener(this.updateUser);
    this.token2 = MessageStore.addListener(this.updateMessage);
  },

  componentWillUnmount: function() {
    this.token1.remove();
    this.token2.remove();
  },

  updateUser: function() {
    this.setState({currentUser: UserStore.all()});
  },

  updateMessage: function() {
    this.setState({error: MessageStore.error()});
  },

  selectOptions: function(array) {
    var returnArray = [];
    array.forEach(function(el){
      returnArray.push(<option>{el}</option>
    )})
    return returnArray;
  },

  renderError: function(error) {
    if (error.length > 0) {
      var returnArray = [];
      error.forEach(function(message) {
        returnArray.push(<li className='error-message'>{message}</li>);
      });
      return returnArray;
    }
    else {
      return null;
    }
  },

  receiveLatLng: function(location) {
    this.setState({lat: location.lat, lng: location.lng});
  },

  requestLatLng: function(street, city, state ) {
    ApiUtil.fetchLatLng(street, city, state, this.receiveLatLng)
  },

  redirectPage: function(carId) {
    this.props.history.pushState(null, 'cars/' + carId);
  },

  handleSubmit: function() {
    if (this.state.currentUser) {
      if (this.state.street || this.state.city || this.state.state) {
        this.requestLatLng(this.state.street, this.state.city, this.state.state);
      }
      CarPostActions.createCar({
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        milage: this.state.milage,
        price: this.state.price,
        car_type: this.state.type,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zipcode,
        user_id: this.state.currentUser.id,
        lat: this.state.lat,
        lng: this.state.lng,
        description: this.state.description
      }, this.redirectPage);
    }
    else {
      alert('You need to log in first')
    }
  },

  renderPostForm: function() {
    return (
      <div>
        <form className='car-post-form' onSubmit={this.handleSubmit}>
          <label>
            <h4>Make</h4>
            <input className='car-post-form-make' type="text" valueLink={this.linkState('make')} />
          </label>

          <label>
            <h4>Model</h4>
            <input className='car-post-form-model' type="text" valueLink={this.linkState('model')} />
          </label>

          <label>
            <h4>Year</h4>
            <select className='car-post-form-year' valueLink={this.linkState('year')}>
            <option></option>
            {this.selectOptions(YEAR)}
            </select>
          </label>

          <label>
            <h4>Milage</h4>
            <input className='car-post-form-mileage' type="number" valueLink={this.linkState('milage')} />
          </label>

          <label>
            <h4>Price</h4>
            <input className='car-post-form-price' type="number" step="0.01" valueLink={this.linkState('price')} />
          </label>

          <label>
            <h4>Car Type</h4>
            <select className='car-post-form-type' valueLink={this.linkState('type')}>
              <option></option>
              {this.selectOptions(TYPE)}
            </select>
          </label>

          <label>
            <h4>Location:</h4>
            <input className='car-post-form-street' type="text" placeholder='street' valueLink={this.linkState('street')} />
            <input className='car-post-form-city' type="text" placeholder='city' valueLink={this.linkState('city')} />
            <select className='car-post-form-state' valueLink={this.linkState('state')}>
              <option>state</option>
              {this.selectOptions(STATE)}
            </select>
            <input className='car-post-form-zipcode' type="text" placeholder='zip code' valueLink={this.linkState('zipcode')} />
          </label>

          <label>
            <h4>Description:</h4>
            <br/>
            <textarea className='car-post-form-description' valueLink={this.linkState('description')} rows="8" cols="40"></textarea>
          </label>

          <input className='car-post-form-submit-btn' type="submit" value="Submit"/>
        </form>
      </div>
    );
  },

  render: function() {
    return (
      <div className='car-post-page'>
        <h2>Please fill out following Information</h2>
        {this.renderPostForm()}

        <div>
          {this.renderError(this.state.error)}
        </div>
      </div>
    )
  }
});

module.exports = CarPost;
