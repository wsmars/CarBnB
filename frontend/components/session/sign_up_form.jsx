var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionActions = require('../../actions/session_actions');
var UserStore = require('../../stores/user_store');
var MessageStore = require('../../stores/message_store');

var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      user: undefined,
      error: [],
      username: '',
      password: '',
      passwordConfirmation: '',
      email: ''
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
    this.setState({user: UserStore.all()});
  },

  updateMessage: function() {
    this.setState({error: MessageStore.error()});
  },

  renderError: function(error) {
    if (error.length > 0) {
      var returnArray = [];
      error.forEach(function(message) {
        returnArray.push(<li className='error-message'>- {message}</li>);
      });
      return returnArray;
    }
    else {
      return null;
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    SessionActions.signUp({
      username: this.state.username,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation,
      email: this.state.email
    });
  },

  render: function() {
    return (
      <div className='sign-up-form-container'>

        <h4 className='sign-up-title'>Sign Up</h4>
        <div className='sign-up-form-title-border'> </div>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>

        <input className='sign-up-username-input' placeholder="Username" type="text" valueLink={this.linkState('username')} />

        <input className='sign-up-password-input' placeholder="Password" type="password" valueLink={this.linkState('password')} />

        <input className='sign-up-password-confirmation-input' placeholder="Confirm Password" type="password" valueLink={this.linkState('passwordConfirmation')} />

        <input className='sign-up-email-input' placeholder="Email" type="text" valueLink={this.linkState('email')} />
        <div className='sign-up-form-btn-border'>  </div>
        <input className='sign-up-submit-btn' type="submit" value="Sign Up"/>
        </form>

        <div>
          {this.renderError(this.state.error)}
        </div>
      </div>
    );
  }
});

module.exports = SignUpForm;
