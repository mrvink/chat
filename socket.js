/**
 * Server Maintenance Module
 */

module.exports = function(app){
	"user strict"

	return{
		io : null,

		init : function(){
			this.io = require('socket.io')(app.server._server)
		},


		listen : function(){
			this.io.on('connection', function (socket){
				console.log('un user est connecté');

				socket.on('msg', function(content){
					console.log(content);

					app.socket.io.emit('confirm', 'message bien reçu');
				});
			});

		}

	}
};