var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./containers/App/index.jsx');
var reactRouter = require('react-router');

var Buscador = require('./containers/Buscador/index.jsx');
var Item = require('./containers/Item/index.jsx');
var Resultado = require('./containers/Resultado/index.jsx');

var Router = reactRouter.Router;
var Route = reactRouter.Route;

// import { Router, Route, Link, browserHistory } 
// console.log(reactRouter.browserHistory)

ReactDOM.render(
  <Router history={reactRouter.browserHistory} onUpdate={function(){ window.scrollTo(0, 0) }}>
  	<Route path="/" component={App}>
  		<Route path="buscar" component={Buscador} />
  		<Route path="resultado" component={Resultado} />
  		<Route path="item/:id" component={Item} />
  	</Route>
  </Router>,
  document.getElementById('example')
);