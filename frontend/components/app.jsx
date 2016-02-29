var React = require('react');
var Header = require('./header');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
