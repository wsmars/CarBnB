var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = require('history');

var App = require('./components/app');
var LandingPage = require('./components/landing_page.jsx');
var Cars = require('./components/cars');
var CarShow = require('./components/car_show');
var CarPost = require('./components/car_post');

var routes = (
	<Router history={History.HashHistory}>
	  <Route path='/' component={App}>
	  	<IndexRoute component={LandingPage}/>
			<Route path='cars' component={Cars}/>
			<Route path="cars/:carId" component={CarShow} />
			<Route path="newcar" component={CarPost} />
	  </Route>
	</Router>)


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
