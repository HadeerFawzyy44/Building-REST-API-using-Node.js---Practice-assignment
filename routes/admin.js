//just to add data to the cluster 

const express= require('express')
const products=require('../data/products.json')
const category = require('../data/categories.json')
const adminRoutes=express.Router()
const debug = require('debug')('app:adminRoutes');
const { MongoClient } = require('mongodb');

adminRoutes.route('/').get((req,res)=>{
  let url="mongodb://hadeerfawzy:1234@ac-rxiyo4p-shard-00-00.z08fxi5.mongodb.net:27017,ac-rxiyo4p-shard-00-01.z08fxi5.mongodb.net:27017,ac-rxiyo4p-shard-00-02.z08fxi5.mongodb.net:27017/?ssl=true&replicaSet=atlas-wr7o1r-shard-0&authSource=admin&retryWrites=true&w=majority"
  const dbName='APIUsingNodejs';
  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug('Connected to the mongo DB');

      const db = client.db(dbName);
    
      //const response = await db.collection('products').insertMany(products);
      const response = await db.collection('categories').insertMany(category);

      res.json(response);
   } catch (error) {
      debug(error.stack);
    }
    client.close();
  })(); 

});




module.exports= adminRoutes