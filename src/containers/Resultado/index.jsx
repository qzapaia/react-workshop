var React = require('react');
var Link = require('react-router').Link;
var api = require('../../api');

var App = React.createClass({
  getInitialState:function(){
    return {
      results:[]
    }
  },
  componentWillMount:function(){
    var q = this.props.location.query.q;
    var that = this;
    
    api.search(q).then(function(respuesta){
      // console.log(respuesta.data.results);
      that.setState({
        results:respuesta.data.results
      })
      // console.log(respuesta.data.results)
    })
    // console.log(this.props.location.query.q)
  },
  render: function() {
    return (
      <div>
        <h1> Resultado </h1>

        {this.state.results.map(function(item,ind){
          return <div>
            <Link to={'/item/'+item.id}> {item.title} </Link>
          </div>;
        })}
      </div>
    );
  }
});

module.exports = App;