var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = require('history');

var App = require('./components/app');
var LandingPage = require('./components/landing_page.jsx');


var routes = (
	<Router history={History.HashHistory}>
	  <Route path='/' component={App}>
	  	<IndexRoute component={LandingPage}/>
	  </Route>
	</Router>)


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
