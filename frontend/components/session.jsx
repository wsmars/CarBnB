var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionActions = require('../actions/session_actions');
var UserStore = require('../stores/user_store');
var LogInForm = require('./session/login_form');
var SignUpForm = require('./session/sign_up_form');
var LogOutButton = require('./session/log_out_button');


var Session = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      currentUser: UserStore.all()
    };
  },

  componentDidMount: function() {
    this.token = UserStore.addListener(this.updateCurrentUser);
  },

  componentWillUnmount: function() {
    this.token.remove();
  }, 
   
  updateCurrentUser: function() {
    this.setState({
      currentUser: UserStore.all(),
    });
  },

  toSignUpForm: function() {
    this.props.history.push('signup');
  },

  toSignInForm: function() {
    this.props.history.push('signin');
  },

  handleLogOut: function(e) {
    e.preventDefault();
    SessionActions.logOut();
  },

  renderDiv: function() {
    if (this.state.currentUser) {
      return (
        <div>
          Hello, {this.state.currentUser.username}
          <button onClick={this.handleLogOut}>Log out</button>
        </div>
        );
    }
    else {
      return (
        <div>
          <button onClick={this.toSignUpForm}>Sign Up</button>
          <button onClick={this.toSignInForm}>Sign In</button>
        </div>
      );
    }
  },

  render: function() {
    return (
      <div>
        {this.renderDiv()}
      </div>
    );
  }
});


module.exports = Session;
