const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
let dbName='b30wd';
let dbUrl=`mongodb+srv://jainmonula:TeXvaVfL4P1lwhQj@cluster0.fnjkv.mongodb.net/test?authSource=admin&replicaSet=atlas-f5cue6-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
module.exports={mongodb,MongoClient,dbUrl};