var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = require('history');

var App = require('./components/app');
var Session = require('./components/session.jsx');
var SignUp = require('./components/session/sign_up_form');
var SignIn = require('./components/session/login_form');
var Search = require('./components/search');

var routes = (
	<Router history={History.HashHistory}>
	  <Route path='/' component={App}>
	  	<IndexRoute component={Session}/>
	  	<Route path='signup' component={SignUp}/>
	  	<Route path='signin' component={SignIn}/>
	  </Route>
	</Router>)


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
