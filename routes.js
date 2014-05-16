// Default Routes

module.exports = function (app, handlebars) {
	
	app.get('/', function (req, res) {
	    res.render('landing', {layout: 'landing'});
	});

	app.get('/success', function (req, res) {
	    res.render('success', {
	    	layout: 'landing'
	    });
	});

	require('./routes/users')(app, handlebars);
};