const express = require('express');
const mongosse = require('mongoose');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const cookieParser= require('cookie-parser');
const session = require('express-session');
const category = require('./models/category');
const product = require('./models/product');
const adminRoutes=require('./routes/admin');
const productRoute=require('./routes/product')(product);
const categoryRoute = require('./routes/category')(category);
const cors = require('cors');
const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret:"APIUsingNodejs"}));
app.use(cors())
app.use('/admin',adminRoutes);
app.use('/products',productRoute);
app.use('/categories',categoryRoute)
app.get('/', (req, res) => {
    res.send('welcome to my Api');
});


//app.listen(PORT)
mongosse.connect("mongodb://hadeerfawzy:1234@ac-rxiyo4p-shard-00-00.z08fxi5.mongodb.net:27017,ac-rxiyo4p-shard-00-01.z08fxi5.mongodb.net:27017,ac-rxiyo4p-shard-00-02.z08fxi5.mongodb.net:27017/?ssl=true&replicaSet=atlas-wr7o1r-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(
    result=>{
        app.listen(Port,()=>{
            console.log(`Running on port ${Port}`);
        });
    })
.catch(
    error => { console.log(error) 
})













