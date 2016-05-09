var axios = require('axios');

module.exports = {
	search:function(query){
		return axios.get('https://api.mercadolibre.com/sites/MLA/search?q='+query);
	},
	getDetail:function(id){
		return axios.get('https://api.mercadolibre.com/items/'+id);
	}
}