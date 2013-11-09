
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var userV1 = require('./routes/api/v1/user');
var postV1 = require('./routes/api/v1/post');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

// Blogs
app.get('/blog', postV1.index);
app.get('/blog/new', postV1.create);
app.get('/blog/:id', postV1.show);
app.get('/blog/:id/delete', postV1.delete);
app.get('/blog/:id/update', postV1.update);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
