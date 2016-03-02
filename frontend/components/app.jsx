var React = require('react');
var Header = require('./header');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Header history={this.props.history} path={this.props.location.pathname}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
