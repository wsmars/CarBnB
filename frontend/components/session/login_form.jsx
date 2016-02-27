var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionActions = require('../../actions/session_actions');
var UserStore = require('../../stores/user_store');
var MessageStore = require('../../stores/message_store');

var LogInForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      user: undefined,
      username: '',
      password: ''
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
    this.setState({username: ''});
    this.setState({password: ''});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    SessionActions.logIn({
      username: this.state.username,
      password: this.state.password
    }, this.backRootPage);
  },

  backRootPage: function() {
    this.props.history.push('/');
  },

  handleCancel: function() {
    this.setState({username: '', password: ''});
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

          <input type="submit" value="Sign In"/>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>

    );
  }
});

module.exports = LogInForm;
