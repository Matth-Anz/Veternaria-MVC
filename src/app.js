const express=require ('express');
const morgan=require('morgan');
const app=express();

//setings
app.set('port',process.env.PORT||3600);

//Midellwares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(require('./routes/veterinaria.routes'));

module.exports=app;