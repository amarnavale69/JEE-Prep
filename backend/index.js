const express = require('express');
const cors = require('cors');
require('./db/config');
const users= require("./db/users");
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req,res)=>{
    let usersx = new users(req.body);
    let result = await usersx.save();
    res.send(result);


})



app.get('/',(req,res)=>{
    res.send('app about is live ...')
    
})    
app.listen(5000);

// app.post('/register',async (req,res)=>{
//         let user = new users(req.body);    
//         let result = await user.save();
//         res.end(result);

//     })







