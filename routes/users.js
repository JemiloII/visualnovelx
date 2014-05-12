//Users Routes

module.exports = function (app, handlebars) {

	app.get('/users', function (req, res) {
		console.log('Users: Index > Routes');
		require('../controllers/users').index(app, req, res);
	});

	app.get('/users/add', function (req, res) {
		console.log('Users: Add > Routes');
	    require('../controllers/users').add(app, req, res);
	});

	app.post('/users/add', function (req, res) {
		console.log('Users: Add > Routes');
	    require('../controllers/users').add(app, req, res, page);
	});

	app.get('/users/edit', function (req, res) {
		res.render('errors/404', {layout: 'error'});
	});

	app.get('/users/edit/:id', function (req, res) {
		console.log('Users: Edit > Routes');
	    require('../controllers/users').edit(app, req, res);
	});

	app.get('/users/show', function (req, res) {
	    res.render('errors/404', {layout: 'error'});
	});

	app.get('/users/:name', function (req, res) {
		console.log('Users: Show > Routes');
	    require('../controllers/users').show(app, req, res);
	});

	app.get('/users/show/:id', function (req, res) {
	    console.log('Users: Show > Routes');
	    require('../controllers/users').show(app, req, res);
	});

	app.get('/users/destroy', function (req, res) {
	    res.render('errors/404', {layout: 'error'});
	});

	app.get('/users/destroy/:id', function (req, res) {
	    console.log('Users: Destroy > Routes');
	    require('../controllers/users').destroy(app, req, res);
	});

	app.post('/users/signup', function (req, res) {
		console.log('Users: Signup > Routes');
		require('../controllers/users').add(app, req, res);
	});
};