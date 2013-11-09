/*
	API: V1: POSTS
*/

// MONGODB
var MONGO = require('mongodb'),
		DB = new MONGO.Db('sundb', new MONGO.Server('localhost',27017, {auto_reconnect:true}), {});

DB.open(function(err, db){
	if(db){
		console.log('Connected to db');

		db.collection('posts', function(err, collection){

		})
	}
})

// CRUD

exports.create = function(req, res){
	res.send('create');
};

exports.delete = function(req, res){
	res.send('delete');
};

exports.update = function(req, res){
	res.send('update');
};

exports.index = function(req, res){
	res.send('index');
};

exports.show = function(req, res){
	res.send('show');
};