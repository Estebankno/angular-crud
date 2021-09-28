const rutas=require('express').Router()

//asignamos ls ruta --we assign the route
rutas.get('/', function(req,res){
  res.send('Hola des de rutas / inicio')
})

module.exports=rutas;