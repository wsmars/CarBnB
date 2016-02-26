var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionActions = require('../actions/session_actions');
var UserStore = require('../stores/user_store');


var LogInForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      user: [],
      username: '',
      password: ''
    });
  },

  componentDidMount: function() {
    UserStore.addListener(this.updateUser);
  },

  updateUser: function() {
    this.setState({user: UserStore.all()});
    this.setState({username: ''});
    this.setState({password: ''});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    SessionActions.logIn({
      username: this.state.username,
      password: this.state.password
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

          <input type="submit" value="Sign In"/>
        </form>

        {this.state.user.username}
      </div>
    );
  }
});

module.exports = LogInForm;
