var React = require('react');
var Search = require('./search');

var Session = require('./session');
var MessageStore = require('./../stores/message_store');
var ApiUtil = require('./../util/api_util');
var SessionActions = require('./../actions/session_actions');


var App = React.createClass({

	getInitialState: function() {
    return ({
      error: MessageStore.error()
    });
  },

	componentDidMount: function() {
		this.tokenUser = MessageStore.addListener(this.updateMessage);
		ApiUtil.fetchCurrentUser(SessionActions.receiveCurrentUser);
	},

	componentWillUnmount: function() {
		this.token.remove();
	},

	updateMessage: function() {
		this.setState({error: MessageStore.error()});
	},

  renderError: function(error) {
    if (error.length > 0) {
      var returnArray = [];
      error.forEach(function(message) {
        returnArray.push(<li>{message}</li>);
      });
      return returnArray;
    }
    else {
      return null;
    }
  },

  render: function() {
    return (
      <div className='land-page'>
      	{this.props.children}
      	{this.renderError(this.state.error)}
        <h1 className='home-page-slogan'>TRAVEL YOUR WAY</h1>
        <h4 className='home-page-statement'>
          Rent unique cars to travel from local hosts.
        </h4>
        <Search />
      </div>
    );
  }
});

module.exports = App;
