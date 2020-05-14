const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res)=>{
    res.send('<h1>Hello World!<h1/>')
});

app.get('/dogs', (req, res)=>{
    res.send('<h1>Woof<h1/>');
});

app.get('/cats', (req, res)=>{
    res.send('<h1>Meow<h1/>')
});

app.get('/cats_and_dogs', (req, res)=>{
    res.send('<h1>Living together<h1/>')
});

app.get('/greet/:user', (req, res)=>{
    res.send(`<h1>Hello, ${req.params.user}<h1/>`)
});


app.get('/:name/:age', (req, res)=>{
    let age = res.query.age || "World";
    let ageString = age ? `You were born in ${2020 - age}`
    res.send(`Hello, ${req.parms.nam}! ${ageString}`)    
});



app.listen(port, ()=>console.log(`listening on port http://localhost:${port}`));
