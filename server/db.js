const mysql = require('mysql');

var conn = mysql.createConnection({

    host : 'localhost',
    username : 'root',
    password : '',
    database : 'test'

});

conn.connect((err)=>{

    if(!err){
        console.log('Db connected succesfully');
    }else{
        console.log('db connection failed'+ err.message)
    }

});

module.exports = conn;