var React = require('react');
var Link = require('react-router').Link;

var Session = require('./session/session');
var Search = require('./landing_component/search');
var CarPost = require('./car_post');


var Header = React.createClass({

  renderLogo: function() {
    return (
      <div className='logo-container'>
        <h1 className='logo'><Link to='/'>carbnb</Link></h1>
      </div>
    );
  },

  renderHelp: function() {
    return(
      <div className='help-container'>
        <h4 className='help'>Help</h4>
      </div>
    );
  },

  renderSearch: function() {
    var path = this.props.path;
    if (path === '/') {
      return (
        <div className='home-page-search-bar'>
          <Search history={this.props.history}/>
        </div>
      )
    }
    else {
      return (
        <div className='cars-page-serach-bar-container'>
          <Search history={this.props.history}/>
        </div>
      )
    }
  },

  handleCarPost: function() {
    this.props.history.push('newcar');
  },

  render: function() {
    return (
      <div className='header-container'>
        {this.renderLogo()}
        {this.renderSearch()}
        <Session />
        {this.renderHelp()}
        <div className='post-btn-container'>
          <button onClick={this.handleCarPost} className='car-post-btn'>Post a Car</button>
        </div>
      </div>
    );
  }
});


module.exports = Header;
