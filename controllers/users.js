//Users Controller
module.exports.index = function(app, req, res){
	console.log('Users: Index > Controller');
	require('../models/users.js').index();
	res.render('users/index', {
        title: 'Users',
        users: users
    }, console.log('Users: Index > View'));
};

module.exports.add = function(app, req, res, page){
	console.log('Users: Add > Controller');
	console.log(req.body.users_submit);
	if(req.body.users_submit === 'add'){
		var page = 'add';
		require('../models/users.js').add(app, req, res, page);
	}else if(req.body.users_submit === 'Connect'){
		var page = 'signup';
		require('../models/users.js').add(app, req, res, page);
	}

	if(page === 'add'){
		res.render('users/add', {
	        title: 'Add User'
	    }, console.log('Users: Add > View'));
	}else if(page === 'signup'){
		res.render('/success', {
	        title: 'Your Connected!',
	        msg: 'You have successfully connected with '+req.body.users_email+'!',
	    }, console.log('Landing: Sucess > View'));
	}
};

module.exports.edit = function(app, req, res){
	console.log('Users: Edit > Controller');
	require('../models/users.js').edit(app, req, res);
	res.render('users/edit', {
        title: 'Edit User: ',
        users: users,
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
	require('../models/users.js').destroy(app, req, res);
	res.render('users/destroy', {
        title: 'Delete User',
        id: req.params.id
    });
};

module.exports.signup = function(app, req, res){
	console.log('Users: Signup > Controller');
	if(req.body.users_submit === 'Connect'){
		require('../models/users.js').signup(app, req, res);
		res.render('users/add', {
	        title: 'Add User'
	    }, 

	    console.log('Users: Signup > View'));
	
	}else if(req.body.users_submit === 'Create'){
		require('../models/users.js').add(app, req, res);
		res.render('users/success', {
	        title: 'Account Created Successfully'
	    });
	}
};