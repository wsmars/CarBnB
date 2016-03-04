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
      error: [],
      username: '',
      password: ''
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
    this.setState({username: ''});
    this.setState({password: ''});
  },

  updateMessage: function() {
    this.setState({error: MessageStore.error()});
  },

  renderError: function(error) {
    if (error.length > 0) {
      var returnArray = [];
      error.forEach(function(message) {
        returnArray.push(<li className='error-message'>{message}</li>);
      });
      return returnArray;
    }
    else {
      return null;
    }
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
      <div className='log-in-form-container'>
        <h4 className='log-in-title'>Log In</h4>
        <div className='log-in-form-title-border'> </div>
        <form className='log-in-form' onSubmit={this.handleSubmit}>
          <input className='log-in-username-input' placeholder="Username" type="text" valueLink={this.linkState('username')} />

          <input className='log-in-password-input' placeholder="Password" type="password" valueLink={this.linkState('password')} />

          <div className='log-in-form-btn-border'>  </div>
          <input className='log-in-submit-btn' type="submit" value="Sign In"/>
        </form>

        <div>
          {this.renderError(this.state.error)}
        </div>
      </div>

    );
  }
});

module.exports = LogInForm;
