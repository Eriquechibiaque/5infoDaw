const mongoose = require("mongoose");

const uri=
 "mongodb://erique:131718@cluster0-shard-00-00.cmdz8.mongodb.net:27017,cluster0-shard-00-01.cmdz8.mongodb.net:27017,cluster0-shard-00-02.cmdz8.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-nqrcr9-shard-0&authSource=admin&retryWrites=true&w=majority";

 mongoose.connect(uri, {useNewUrlParser: true, useUnifiedtopology: true});
module.exports = mongoose;


