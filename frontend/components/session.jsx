var React = require('react');
var Link = require('react-router').Link;

var SessionActions = require('../actions/session_actions');
var UserStore = require('../stores/user_store');
var LogInForm = require('./session/login_form');
var SignUpForm = require('./session/sign_up_form');


var Session = React.createClass({

  getInitialState: function() {
    return {
      currentUser: UserStore.all(),
      button: ''
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
    this.setState({button: 'signup'})
  },

  toSignInForm: function() {
    this.setState({button: 'signin'})
  },

  handleLogOut: function(e) {
    e.preventDefault();
    this.setState({button: ''});
    SessionActions.logOut();
  },

  handleCancel: function() {
    SessionActions.cleanError();
    this.setState({button: ''})
  },

  renderForm: function() {
    if (this.state.button === '') { return null; }
    else if (this.state.button === 'signup') { 
      return (
        <div className='sign-up-form'>
          <SignUpForm />        
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
        );
    }
    else if (this.state.button === 'signin') { 
      return (
        <div className='log-in-form'>
          <LogInForm />
          <button onClick={this.handleCancel}>Cancel</button>
        </div>);
    }
  },

  switchButton: function() {
    if (this.state.currentUser) {
      return (
        <div className='logged-in-user-profile'>
          Hello, {this.state.currentUser.username}
          <button onClick={this.handleLogOut} className='log-out-button'>Log out</button>
        </div>
        );
    }
    else {
      return (
        <div className='login-signup-button'>
          <div className='log-in-container'>
            <button onClick={this.toSignInForm} className='log-in-btn'>Sign In</button>
          </div>
          <div className='sign-up-container'>
            <button onClick={this.toSignUpForm} className='sign-up-btn'>Sign Up</button>
          </div>
          {this.renderForm()}
        </div>
      );
    }
  },

  render: function() {
    return (
      <div className='session-container'>
        {this.switchButton()}
      </div>
    );
  }
});


module.exports = Session;
