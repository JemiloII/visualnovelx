// Default Routes

module.exports = function (app, handlebars) {
	
	app.get('/', function (req, res) {
	    res.render('landing', {layout: 'landing'});
	});

	require('./routes/users')(app, handlebars);
};