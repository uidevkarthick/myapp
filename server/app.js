const express = require('express');
const bodyparser =  require('body-parser');
const config = require('./config.js');
const db = require('./db.js');

const app = express();

/*cros origin allow*/
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin',config.accessControlAllowOrigin);
	res.header('Access-Control-Allow-Headers',config.accessControlAllowHeaders);
	res.header('Access-Control-Allow-Methods',config.accessControlAllowMethods);
	next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.post('/api/register', (req,res) =>{

    const body = req.body;
    const username = body.username;
    const email = body.email;
    const password = body.password;

    let insertinfo = {
        name : username,
        email : email,
        password : password
    }

    db.query('insert into register set ?', insertinfo, (err,result) =>{

        if(err){
            res.send({
                'status': false,
                'message': 'connot insert'
            })
        }else{
            res.send({
                'status': true,
                'message': 'inserted'
            })
        }

    })

});

app.get('/api/fetch',(req,res)=>{

    db.query('select * from register', (err,rows,result)=>{
        if(err){
            console.log('no data');
        }else{
            res.send(rows)
        }

    })

})


app.listen(3000,() => {
    console.log("server start")
})