const mysql=require('mysql');
const conexion=mysql=createConnection({
    host:'localhost',
    user:'roo',
    password:'andres0206',
    port:3306,
    database:'db_basico'
});

conexion.connect((err)=>{
    if(err){
        console.log('ha hocurrido un error '+ err)
    }
    else{
        console.log('la base de datos se conecto ')
    }
});

module.exports =conexion