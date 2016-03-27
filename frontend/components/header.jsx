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
      return null
    }
    else {
      return (
        <div className='cars-page-serach-bar-container'>
          <Search history={this.props.history}/>
        </div>
      )
    }
  },

  renderGitLinkedin: function () {
    var path = this.props.path;
    if (path === '/') {
      return (
        <div className='git-linkedin-container'>
          <a href="https://github.com/wsmars">
            <img className='git-icon' src='http://res.cloudinary.com/dvy2aua0n/image/upload/v1459108881/github_icon_f9svjh.png'/>
          </a>
          <a href="https://www.linkedin.com/in/mingshuo-zhang-43a79a114?trk=hp-identity-name">
            <img className='linkedin-icon' src='http://res.cloudinary.com/dvy2aua0n/image/upload/v1459108880/linkedin_icon_z1x017.png'/>
          </a>
        </div>
      )
    }
    else {
      return null;
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
        {this.renderGitLinkedin()}
        <Session />
        <div className='post-btn-container'>
          <button onClick={this.handleCarPost} className='car-post-btn'>Post a Car</button>
        </div>
      </div>
    );
  }
});


module.exports = Header;
