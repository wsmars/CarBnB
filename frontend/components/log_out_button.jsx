var React = require('react');

var SessionActions = require('../actions/session_actions');
var UserStore = require('../stores/user_store');

var LogOutButton = React.createClass({



  handleLogOut: function(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  render: function() {
    return (
      <div>
        <br/>
        <button onClick={this.handleLogOut}>Log out</button>
      </div>
    );
  }
});

module.exports = LogOutButton;
