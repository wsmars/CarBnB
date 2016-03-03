var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var DateTime = require('react-datetime');

var RequestActions = require('../actions/request_actions');
var UserStore = require('../stores/user_store');
var MessageStore = require('../stores/message_store');

Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + "-" + (mm[1]?mm:"0"+mm[0]) + "-" + (dd[1]?dd:"0"+dd[0]); // padding
};

var RequestForm = CarShow = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    var date = new Date();
    var tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    return ({
      startDate: date.yyyymmdd(),
      endDate: tomorrow.yyyymmdd(),
      currentUser: UserStore.all(),
      message: []
    });
  },

  componentDidMount: function() {
    this.token1 = MessageStore.addListener(this.updateMessage);
    this.token2 = UserStore.addListener(this.updateCurrentUser);
  },

  componentWillUnmount: function() {
    this.token1.remove();
    this.token2.remove();
  },

  updateMessage: function() {
    this.setState({message: MessageStore.message()});
  },

  updateCurrentUser: function() {
    this.setState({currentUser: UserStore.all()});
  },

  renderMessage: function(message) {
    if (message.length > 0) {
      return (
        <div>
          <li>{message[0]}</li>
        </div>
      );
    }
    else {
      return null;
    }
  },

  handleSubmit: function(e) {
    if (this.state.currentUser) {
      e.preventDefault();
      var startDate = this.state.startDate;
      var endDate = this.state.endDate;
      var carId = parseInt(this.props.carId);
      RequestActions.makeRequest(startDate, endDate, carId);
    }
    else {
      e.preventDefault();
      alert('Log in first');
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="date" defaultValue={this.state.startDate} valueLink={this.linkState('startDate')} />
          <input type="date" valueLink={this.linkState('endDate')} />

          <input type="submit" value="Send Request"/>
        </form>

        <div>
          {this.renderMessage(this.state.message)}
        </div>
      </div>
    );
  }
});

module.exports = RequestForm;
