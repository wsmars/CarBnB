var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionActions = require('../../actions/session_actions');
var UserStore = require('../../stores/user_store');

var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      user: undefined,
      username: '',
      password: '',
      passwordConfirmation: '',
      email: ''
    });
  },

  componentDidMount: function() {
    this.token = UserStore.addListener(this.updateUser);
  },
  
  componentWillUnmount: function() {
    this.token.remove();
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
    }, this.backRootPage);
  },

  backRootPage: function() {
    this.props.history.push('/');
  },

  handleCancel: function() {
    this.setState({username: '', password: '', passwordConfirmation: '', email: ''});
    SessionActions.cleanError();
    this.props.history.push('/');
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
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
});

module.exports = SignUpForm;
