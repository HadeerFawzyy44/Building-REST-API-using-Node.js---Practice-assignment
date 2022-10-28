const mongosse = require('mongoose');

const Schema = mongosse.Schema;

const productSchema = new Schema({
    
    Name:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    },
    ImgURL:{
        type:String,
        required:true
    },
    categoryID:{
        type:Number,
        required:true
    }
});

module.exports=mongosse.model('Product',productSchema,'products');

