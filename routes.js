module.exports = function (app, handlebars) {
	app.get('/', function (req, res) {
	    res.render('home', {
	        title: 'Home',
	    });
	});

	require('./routes/users.js')(app, handlebars);
};