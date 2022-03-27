var express = require('express');
var router = express.Router();
var {mongodb,MongoClient,dbUrl} =  require('../dbSchema')

// import {dburl,mongodb,MongoClient} from '../dbSchema';
/* GET users listing. */
router.get('/', function(req, res, next) {
});


router.post('/signup', async(req, res)=> {
  const client = await  MongoClient.connect(dbUrl);
try{
  const db= await client.db('b30wd');
  let user=await db.collection('users').find({email:req.body.email}).toArray();
  if(user.length>0){
    res.json({
      statusCode:400,
      message:'User already exists'
    });
  }else{
    let document=await db.collection('users').insertOne(req.body);
    res.json({
      statusCode:201,
      message:'Signup Successfully',
      data:document
    });
  }

}catch(err){
  console.log(error)
  res.json({
    statusCode:500,
    message:"Internal Server Error"
  })

}finally{
  client.close()
}
});
module.exports = router;
