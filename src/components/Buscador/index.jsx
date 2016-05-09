var React = require('react');
require('./styles.css')

module.exports = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    this.props.cuandoAlguienEnvie(e.target.query.value);
  },
  render: function() {
    return (
      // <div className={ "buscador " + style.buscar}>
      <div className="buscador">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" />
          <button>Enviar</button>
        </form>

      </div>
    );
  }
});
