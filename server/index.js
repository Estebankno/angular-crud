require('./config/conexion');

const express = require('express');
const { post } = require('../rutas');
const rutas = require('../rutas');
const port =(process.env.port || 3000);


//express
const app=express()

//config

app.set('port',port)

//rutas 

app.use('/api',require('./rutas'))

//iniciar express --start express

app.lisent(app.get('post'),error=>{

if(error) {
    console.log('error al iniciar servidor '+error)
    
}else{
    console.log('servidor iniciado en el puerto '+port)
}
})