var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionActions = require('../actions/session_actions');
var UserStore = require('../stores/user_store');


var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      user: [],
      username: '',
      password: '',
      passwordConfirmation: '',
      email: ''
    });
  },

  componentDidMount: function() {
    UserStore.addListener(this.updateUser);
  },

  updateUser: function() {
    this.setState({user: UserStore.all()});
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

        {this.state.user.username}
      </div>
    );
  }
});

module.exports = SignUpForm;
