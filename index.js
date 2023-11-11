const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hey we are working in docker , I am changing')
});

app.listen(config.PORT, ()=>{
    console.log('Application started successfully on port: ' + config.PORT);
});