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

module.exports.add = function(app, req, res){
	console.log('Users: Add > Model :: POST');
	mysql_connect();
	var moment = require('moment');
	var today = moment().format('YYYY-MM-DD');
	var query = 'INSERT INTO users VALUES(NULL, "'+ req.body.users_display_name+'", "'+ req.body.users_login_name +'", "'+ req.body.users_email +'", "'+ req.body.users_password +'", "'+ req.body.users_account_type +'", "'+ today +'", "0000-00-00")';
	
	var check_users_login_name = 'SELECT users_login_name FROM users WHERE users_login_name="'+ req.body.users_login_name +'"';
	var check_users_email = '';

	connection.connect();
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
		console.log(err);
	});
	connection.end();
};

module.exports.edit = function(app, req, res){
	console.log('Users: Edit > Model');
	mysql_connect();
	users = [];

	connection.connect();
	connection.query('SELECT * FROM users WHERE users_id="'+req.params.id+'"', function(err, rows, fields) {
		if (err) throw err;

		for(var i=0; i< rows.length; i++){
			users[i] = rows[i];
		}
	});
	connection.end();
};

module.exports.show = function(app, req, res){
	console.log('Users: Show > Model');
	mysql_connect();
	users = [];
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