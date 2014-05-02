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
	if(req.body.users_submit){
		require('../models/users.js').add(app, req, res);
	}
	res.render('users/add', {
        title: 'Add User'
    },
    console.log('Users: Add > View')
    );
};

module.exports.edit = function(app, req, res){
	console.log('Users: Edit > Controller');
	require('../models/users.js').edit(app, req, res);
	res.render('users/edit', {
        title: 'Edit User: ',
        users: users,
        account: account,
    });
    
};

module.exports.show = function(app, req, res){
	console.log('Users: Show > Controller');
	require('../models/users.js').show(app, req, res);
	res.render('users/show', {
        title: 'Show User',
        users: users,
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