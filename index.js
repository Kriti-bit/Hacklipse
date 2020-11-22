const express = require('express');
const path = require('path');

const app=express();
const PORT = process.env.PORT || 3000;

//setting up view engine
app.set('view engine','ejs');

app.use('/public',express.static(path.join(__dirname,'public')))

//homepage route
app.get('/',(req,res)=>{
    res.render('homepage');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.get('/info',(req,res)=>{
    res.render('info_guide');
})

app.listen(PORT,()=>{
    console.log('Listening to Port '+PORT);
})