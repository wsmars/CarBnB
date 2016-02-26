var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionActions = require('../actions/session_actions');
var UserStore = require('../stores/user_store');
var LogInForm = require('./login_form');
var SignUpForm = require('./sign_up_form');
var LogOutButton = require('./log_out_button');


var Session = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      clickStatus: false
    };
  },

  clickSignIn: function() {
    this.setState({clickStatus: 'SignIn'});
  },

  clickSignUp: function() {
    this.setState({clickStatus: 'SignUp'});
  },

  clickSignOut: function() {
    this.setState({clickStatus: false});
  },
  logoutButton: function(){
    debugger
    return UserStore.is_logged_in() ? <LogOutButton/> : null;
  },

  render: function() {
    return (
      <div>
        {this.state.clickStatus === 'SignIn' ?
            (<div>
              <button onClick={this.clickSignUp}>Sign Up</button>
              <LogInForm/>
            </div>) :
            (this.state.clickStatus === 'SignUp' ?
              (<div>
                <button onClick={this.clickSignIn}>Sign In</button>
                <SignUpForm/>
              </div>) :
                (<div>
                  <button onClick={this.clickSignUp}>Sign Up</button>
                  <button onClick={this.clickSignIn}>Sign In</button>
                </div>
                )
              )
        }
        {this.logoutButton()}
        </div>
    );
  }
});


module.exports = Session;
