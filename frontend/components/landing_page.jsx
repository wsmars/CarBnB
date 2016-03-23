var React = require('react');

var Search = require('./landing_component/search');
var Footer = require('./landing_component/footer');

var LandingPage = React.createClass({

  renderSlogan: function() {
    return (
      <div className='middle-slogan-container'>
        <h2 className='home-page-slogan'>Love the road</h2>
        <h4 className='home-page-statement'>
          Rent unique cars to travel from local hosts.
        </h4>
      </div>
    );
  },

  renderBottom: function() {
    return (
      <div>
        <div className="bottom-slogan-container">
          <h2 className="bottom-slogan">Beyond your dreams, within your reach</h2>
          <h4 className='bottom-statement'>Smiling faces, beautiful places</h4>
        </div>
        <ul>
          <div className="bottom-img-container">
            <img src="http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,h_900,w_900/v1458761877/San-Francisco_yrkwsa.jpg"/>
            <h4>San Francisco</h4>
          </div>

          <div className="bottom-img-container">
            <img src="http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,h_900,w_900/v1458763132/NYC_vtxnx3.jpg"/>
            <h4>New York</h4>
          </div>

          <div className="bottom-img-container">
            <img src="http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,h_900,w_900/v1458761884/Cupertino_qkbj9n.jpg"/>
            <h4>Cupertino</h4>
          </div>

        </ul>
      </div>
    );
  },

  render: function() {
    return (
      <div className='land-page'>
        <div className='middle-container'>
          {this.renderSlogan()}
          <img src="http://res.cloudinary.com/dvy2aua0n/image/upload/v1458690030/home_page_background_ekcb9g_wwbu2k.jpg" className='landing-page-img'/>
          <div className='home-page-search-bar'>
            <Search history={this.props.history}/>
          </div>
        </div>

        <div className='bottom-container'>
          {this.renderBottom()}
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = LandingPage;
