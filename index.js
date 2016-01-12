var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/xluis";
var showContent = function(db){
	// Get the documents collection
		var collection = db.collection('users');

		collection.find({}).toArray(function (err, result) {
			if (err) {
				console.log(err);
			} else if (result.length) {
				console.log(result);

			} else {
				console.log('No document(s) found with defined "find" criteria!');

			}

		});
}

mongoClient.connect(url,function(err,db){
	if(err){
		Console.log("Couldnt connect to mongodb because"+err)
	}
	else{


		console.log("Connected succesfully");
		showContent(db);
		db.close();
	}
});