var React = require('react');

var Search = require('./landing_component/search');
var Footer = require('./landing_component/footer')

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
        <div className='bottom-container'>
          {this.renderSlogan()}
          <Search history={this.props.history}/>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = LandingPage;
