var React = require('react');
var Link = require('react-router').Link;
var api = require('../../api');

var App = React.createClass({
  getInitialState:function(){
    return {
      detail:{}
    }
  },
  componentWillMount:function(){

    var id = this.props.params.id;
    var that = this;
    
    api.getDetail(id).then(function(respuesta){
      that.setState({
        detail:respuesta.data
      })
      console.log(respuesta.data)
    })
    
  },
  render: function() {
    return (
      <div>
        <h1> Item </h1>

        <h2>{this.state.detail.title}</h2>
        <h3>{this.state.detail.price}</h3>
        <img src={this.state.detail.thumbnail} />
      </div>
    );
  }
});

module.exports = App;