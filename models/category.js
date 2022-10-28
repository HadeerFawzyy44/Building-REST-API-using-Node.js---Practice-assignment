const mongosse = require('mongoose');

const {Schema} = mongosse;

const category = new Schema({
   
    Name:{
        type:String,
        required:true
    },
  
});

module.exports=mongosse.model('category',category ,"category");

