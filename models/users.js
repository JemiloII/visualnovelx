//Users Model
function mysql_connect(){
	mysql = require('mysql2');
	info  = require('../databases/db_connect_info').info;
	connection = mysql.createConnection(info);
}

module.exports.index = function(){
	console.log('Users: Index > Model');
	mysql_connect();
	users = [];

	connection.connect();
	connection.query('SELECT * FROM users', function(err, rows, fields) {
		if (err) throw err;

		for(var i=0; i< rows.length; i++){
			users[i] = rows[i];
		}
	});
	connection.end();

};

module.exports.add = function(){
	console.log('Users: Add > Model');
	return false;
};

module.exports.edit = function(app, req, res){
	console.log('Users: Edit > Model');
	mysql_connect();
	users = [];
	account = [];

	connection.connect();
	connection.query('SELECT * FROM users WHERE users_id="'+req.params.id+'"', function(err, rows, fields) {
		if (err) throw err;

		for(var i=0; i< rows.length; i++){
			users[i] = rows[i];
		}

		var account = users[0].users_account_type;
	});
	connection.end();
};

module.exports.show = function(app, req, res){
	console.log('Users: Show > Model');
	mysql_connect();
	users = [];
	account = [];
	if(req.params.id){
		query='SELECT * FROM users WHERE users_id="'+req.params.id+'"';
	}else if(req.params.name){
		query= 'SELECT * FROM users WHERE users_login_name="'+req.params.name+'"';
	}

	connection.connect();
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;

		for(var i=0; i< rows.length; i++){
			users[i] = rows[i];
		}
	});
	connection.end();
};

module.exports.destroy = function(app, req, res){
	console.log('Users: Destroy > Model');
	return false;
};