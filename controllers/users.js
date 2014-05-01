//Users Controller
module.exports.index = function(app, req, res){
	console.log('Users: Index > Controller');
	require('../models/users.js').index();
	res.render('users/index', {
        title: 'Users',
        users: users
    }, console.log('Users: Index > View'));
};

module.exports.add = function(app, req, res){
	console.log('Users: Add > Controller');
	require('../models/users.js').add();
	res.render('users/add', {
        title: 'Add User'
    });
};

module.exports.edit = function(app, req, res){
	console.log('Users: Edit > Controller');
	require('../models/users.js').edit(app, req, res);
	
	console.log(account);
	params = {
        title: 'Edit User: ',
        id: req.params.id,
        users: users,
    };
	res.render('users/edit', params);
    
};

module.exports.show = function(app, req, res){
	console.log('Users: Show > Controller');
	//require('../models/users.js').show();
	res.render('users/show', {
        title: 'Show User',
        id: req.params.id
    });
};

module.exports.destroy = function(app, req, res){
	console.log('Users: Destroy > Controller');
	//require('../models/users.js')('destroy');
	res.render('users/destroy', {
        title: 'Delete User',
        id: req.params.id
    });
};