var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

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
      error: [],
      request: undefined
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
    this.setState({error: MessageStore.message()});
  },

  updateCurrentUser: function() {
    this.setState({currentUser: UserStore.all()});
  },

  updateRequest: function (request) {
    this.setState({request: request});
  },

  handleSubmit: function(e) {
    if (this.state.currentUser) {
      e.preventDefault();
      var startDate = this.state.startDate;
      var endDate = this.state.endDate;
      var carId = parseInt(this.props.carId);
      debugger;
      var userId = this.state.currentUser.id;
      RequestActions.makeRequest(startDate, endDate, carId, userId, this.updateRequest);
    }
    else {
      e.preventDefault();
      $('#log-in-btn-id').click();
    }
  },


  renderRequest: function() {
    if (this.state.request) {
      var request = this.state.request;
      return(
        <div className='request-detail'>
          <h3>Request Detail</h3>
          <ul>
            <h6>Request By:
              <li>{request.requester.username}</li>
            </h6>
            <h6>Status:
            <li>{request.status}</li>
            </h6>
            <h6>Start Date:
              <li>{request.start_date}</li>
            </h6>
            <h6>End Date:
              <li>{request.end_date}</li>
            </h6>
          </ul>
        </div>
      );
    }
    else {
      return(
        <div>
          <form className='request-form' onSubmit={this.handleSubmit}>
            <h6>Check in</h6>
            <input className='request-form-date' type="date" defaultValue={this.state.startDate} valueLink={this.linkState('startDate')} />
            <h6>Check out</h6>
            <input className='request-form-date' type="date" valueLink={this.linkState('endDate')} />

            <input className='request-form-submit-btn' type="submit" value="Send Request"/>
          </form>

          <div className='request-form-error-message'>
            {this.renderError(this.state.error)}
          </div>
        </div>
      );
    }
  },

  excuteCleanError: function() {
    setTimeout(RequestActions.cleanError(), 5000)
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

  render: function() {
    return (
      <div className='request-form-container'>
        {this.renderRequest()}
      </div>
    );
  }
});

module.exports = RequestForm;
