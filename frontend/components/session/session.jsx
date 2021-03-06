var React = require('react');

var SessionActions = require('../../actions/session_actions');
var UserStore = require('../../stores/user_store');
var LogInForm = require('./login_form');
var SignUpForm = require('./sign_up_form');


var Session = React.createClass({

  getInitialState: function() {
    return {
      currentUser: UserStore.all(),
      button: ''
    };
  },

  componentDidMount: function() {
    this.token = UserStore.addListener(this.updateCurrentUser);
    SessionActions.fetchCurrentUser();
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
        <div className='sign-up-page-container'>
          <SignUpForm />
          <button className='session-sign-up-cancel-button' onClick={this.handleCancel}>Cancel</button>
        </div>
        );
    }
    else if (this.state.button === 'signin') {
      return (
        <div className='log-in-page-container'>
          <LogInForm />
          <button className='session-log-in-cancel-button' onClick={this.handleCancel}>Cancel</button>
        </div>);
    }
  },

  switchButton: function() {
    if (this.state.currentUser) {
      return (
        <div className='logged-user-container'>
          <div className='log-out-btn-container'>
            <button onClick={this.handleLogOut} className='log-out-btn'>Log out</button>
          </div>
          <h4 className='username-container'>Hello, {this.state.currentUser.username}</h4>
        </div>
        );
    }
    else {
      return (
        <div className='login-signup-button'>
          <div className='log-in-container'>
            <button onClick={this.toSignInForm} id='log-in-btn-id' className='log-in-btn'>Sign In</button>
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
