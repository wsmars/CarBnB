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
      error: MessageStore.error(),
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
        returnArray.push(<li>{message}</li>);
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
        <form className='sign-up-form' onSubmit={this.handleSubmit}>

        <label className='sign-up-username-lable'>Username
        <input className='sign-up-username-input' type="text" valueLink={this.linkState('username')} />
        </label>

        <lable className='sign-up-password-lable'>Password
        <input className='sign-up-password-input' type="password" valueLink={this.linkState('password')} />
        </lable>

        <lable className='sign-up-password-confirmation-lable'>Password Confirmation
        <input className='sign-up-password-confirmation-input' type="password" valueLink={this.linkState('passwordConfirmation')} />
        </lable>

        <lable className='sign-up-email-lable'>Email
        <input className='sign-up-email-input' type="text" valueLink={this.linkState('email')} />
        </lable>

        <input className='sign-up-submit-btn' type="submit" value="Sign Up"/>
        </form>

        <div className='sign-up-form-error'>
          {this.renderError(this.state.error)}
        </div>
      </div>
    );
  }
});

module.exports = SignUpForm;
