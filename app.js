const express = require('express');
const app = express();
const port = 8000;

app.get('/legal', (req, res)=>{
    res.send(`This site is legally not yours'<br>
    <a href='/about'>about<a/>  <a href='/contact'>contact<a/>`);
});

app.get('/about', (req, res)=>{
    res.send(`This site is for your testing pleasure'<br>
    <a href='/legal'>legal<a/>  <a href='/contact'>contact<a/>`)
});

app.get('/contact', (req, res)=>{
    res.send(`<div><h2>Contact Us<h2/><p>David Foster<br>404-555-1212<div/><br>
    <a href='/legal'>legal<a/>  <a href='/about'>about<a/>`)
})





app.get('/', (req, res)=>{
    console.log(res);
    res.send(req.query)});

app.listen(port, ()=>console.log(`listening on port http://localhost:${port}`));
