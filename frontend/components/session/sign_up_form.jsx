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
      <div>
        <form onSubmit={this.handleSubmit}>

        <label>Username
        <input type="text" valueLink={this.linkState('username')} />
        </label>

        <lable>Password
        <input type="password" valueLink={this.linkState('password')} />
        </lable>

        <lable>Password Confirmation
        <input type="password" valueLink={this.linkState('passwordConfirmation')} />
        </lable>

        <lable>Email
        <input type="text" valueLink={this.linkState('email')} />
        </lable>

        <input type="submit" value="Sign Up"/>
        </form>

        {this.renderError(this.state.error)}
      </div>
    );
  }
});

module.exports = SignUpForm;
