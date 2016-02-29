var React = require('react');

var Search = require('./search');
var Header = require('./header');


var LandingPage = React.createClass({

  renderSlogan: function() {
    return (
      <div className='middle-container'>
        <h2 className='home-page-slogan'>Love the road</h2>
        <h4 className='home-page-statement'>
          Rent unique cars to travel from local hosts.
        </h4>
      </div>
    );
  },

  render: function() {
    return (
      <div className='land-page'>
        <Header />
        <div className='bottom-container'>
          {this.renderSlogan()}
          <Search />
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;