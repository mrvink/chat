/**
 * Server Maintenance Module
 */

var exp = require('express')();
var http = require('http');

module.exports = function(){
	"user strict";

	return{
		_server : null,

		/**
		 * first init of the server
		 */
		create : function(){
			this._server = http.createServer(exp);

			this.route();
			this.listen();
		},

		/**
		 * activate the listening on the port
		 */
		listen : function(){
			this._server.listen(1337, function(){
				console.log('mon serveur tourne sur 1337 !');
			});
		},

		/**
		 * define routes
		 */
		route : function(){
			exp.get('/', function(req, res){
				res.sendFile(__dirname + '/page.html');
			});
		}
	}
};