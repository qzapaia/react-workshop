var React = require('react');
var Router = require('react-router');
var Buscador = require('../../components/Buscador/index.jsx');

var App = React.createClass({
  onCuandoAlguienEnvie:function(query){
    console.log(query,'soy el container');
    this.context.router.push('/resultado?q='+query);
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div>
        <h1> Buscador </h1>
        <Buscador cuandoAlguienEnvie={this.onCuandoAlguienEnvie} />
      </div>
    );
  }
});

module.exports = App;