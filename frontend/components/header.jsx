var React = require('react');
var Link = require('react-router').Link;

var Session = require('./session/session');

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

  render: function() {
    return (
      <div className='header-container'>
        {this.renderLogo()}
        <Session />
        {this.renderHelp()}
      </div>
    );
  }
});


module.exports = Header;
