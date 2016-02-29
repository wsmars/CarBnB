var React = require('react');
var Link = require('react-router').Link;

var Footer = React.createClass({

  renderAbout: function() {
    return (
      <div className='about-container'>
        <h4 className='about'><Link to='/'>About</Link></h4>
      </div>
    );
  },

  renderHome: function() {
    return (
      <div className='footer-home-container'>
        <h4 className='footer-home'><Link to='/'>Home</Link></h4>
      </div>
    );
  },

  renderHelp: function() {
    return(
      <div className='footer-help-container'>
        <h4 className='footer-help'>Help</h4>
      </div>
    );
  },

  render: function() {
    return (
      <div className='footer-container'>
        {this.renderHome()}
        {this.renderHelp()}
        {this.renderAbout()}
      </div>
    );
  }
});


module.exports = Footer;
