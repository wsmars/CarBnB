var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = require('history');

var App = require('./components/app');
var Search = require('./components/search');

var routes = (<Router history={History.hashHistory}>
  <Route path='/' component={App}>
  </Route>
</Router>)


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
