const express = require('express');
const app = express();
const db = require('./config/mongoose')
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');

app.use(express.urlencoded({extended:true}))

app.use('/',require('./routes/index'));


app.listen(5000,(err)=>{
    if(err){console.log(err);return;}
    console.log('server is running')
})