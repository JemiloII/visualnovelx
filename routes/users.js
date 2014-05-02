//Users Routes

module.exports = function (app, handlebars) {

	app.get('/users', function (req, res) {
		console.log('Users: Index > Routes');
		require('../controllers/users.js').index(app, req, res);
	});

	app.get('/users/add', function (req, res) {
		console.log('Users: Add > Routes');
	    require('../controllers/users.js').add(app, req, res);
	    //users
	});

	app.get('/users/edit', function (req, res) {
		res.render('errors/404', {layout: 'error'});
	});

	app.get('/users/edit/:id', function (req, res) {
		console.log('Users: Edit > Routes');
	    require('../controllers/users.js').edit(app, req, res);
	});

	app.get('/users/show', function (req, res) {
	    res.render('errors/404', {layout: 'error'});
	});

	app.get('/users/:name', function (req, res) {
		console.log('Users: Show > Routes');
	    require('../controllers/users.js').show(app, req, res);
	});

	app.get('/users/show/:id', function (req, res) {
	    console.log('Users: Show > Routes');
	    require('../controllers/users.js').show(app, req, res);
	});

	app.get('/users/destroy', function (req, res) {
	    res.render('errors/404', {layout: 'error'});
	});

	app.get('/users/destroy/:id', function (req, res) {
	    console.log('Users: Destroy > Routes');
	    require('../controllers/users.js').destroy(app, req, res);
	});

};