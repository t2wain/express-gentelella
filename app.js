var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');

var app = express();

app.set('view engine', 'html');
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
});

app.use(express.static(path.join(__dirname, 'public')));

var modules = ['home', 'forms', 'ui', 'tables', 'data', 'additional'];
modules.forEach( m => {
    app.use('/'+m, require('./routes/'+m));
});

app.use('/', require('./routes/base'));

module.exports = app;
