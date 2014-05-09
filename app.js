var express  = require('express');
var exphbr   = require('express3-handlebars');
var bodyParser   = require('body-parser');
var app = express(), handlebars;

// Create `ExpressHandlebars` instance with a default layout.
handlebars = exphbr.create({
    defaultLayout: 'default',
    extname: '.html',

    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: ['views/partials/']
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('html', handlebars.engine);
app.set('view engine', 'html');

app.use(function(req, res, next) {
    if (req.path.substr(-1) == '/' && req.path.length > 1) {
        var query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else {
        next();
    }
});

app.use(bodyParser.urlencoded());

require("./routes")(app, handlebars);

app.use(express.static('assets/'));
app.listen(3000);

console.log('Visual Novel X Brought to you by Brian Jemilo II. Server running and listening on localhost:3000');