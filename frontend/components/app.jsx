var React = require('react');
var Search = require('./search');
var Session = require('./session')

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Session />
        <Search />
      </div>
    );
  }
});

module.exports = App;
