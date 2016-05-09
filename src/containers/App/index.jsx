var React = require('react');
var Link = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          HEADER
        </header>
        
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;