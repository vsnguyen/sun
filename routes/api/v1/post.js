/*
	API: V1: POSTS
*/

// MONGODB
var mongo = require('mongodb');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('sundb', server);

db.open(function(err, db) {
  if(!err) {
    console.log("Connected to 'subdb' database");
    db.collection('posts', {strict:true}, function(err, collection) {
      if (err) {
        console.log("The 'posts' collection doesn't exist.");
      }
    });
   }
});

exports.create = function(req, res){
  var post = req.body;
  db.collection('posts', function(err, collection){
    collection.insert(post, {safe: true}, function(err, result){
      if(err){
        res.send({'message':'An error has occurred', 'post': result[0], 'error': err});
      } else {
        console.log('Success: ' + JSON.stringify(result[0]));
        res.send(result[0]);
      }
    });
  });
  res.send(collection);
};

exports.delete = function(req, res){
  res.send('delete');
};

exports.update = function(req, res){
  res.send('update');
};

exports.index = function(req, res){
  db.collection('posts', function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.send(items);
    });
  });
};

exports.show = function(req, res){
	res.send('show');
};