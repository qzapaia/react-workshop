var React = require('react');
require('./styles.css')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      titulo: this.props.titulo || 'no vino nada'
    };
  },
  componentWillReceiveProps(nextProps){
    if(nextProps.titulo != this.props.titulo){
      this.setState({
        titulo:nextProps.titulo
      });
    }
  },
  componentWillUnmount(){
    console.log('se desmonto');
  },
  render: function() {

    return (
      <div className="buscador">
        hola {this.state.titulo}

      </div>
    );
  }
});
