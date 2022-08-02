// load the express module
const express = require('express');

// create our express app
const app = express(); // <- returns an object that allows
// us to do all the things a server wants to do
// like listen and respond to requests

const todoDb = require('./data/todo-db');

app.get('/todos', function(req, res){
    res.render('todos/index.ejs', {
        greeting: 'Goodbye', // <- Greeting is now a variable inside index.ejs
        todos: todoDb.getAll(),
    });
});


// define a route
// listens for a request from a client
// define the root route: example would be www.google.com, www.bbc.com

app.get('/', function(req, res){
    res.send('<h3>Welcome to the Taco Palace</h3>');
});

app.get('/home', function(req, res){
    // Use render when we want to send an ejs template to the browser
    res.render('home.ejs');
});

// our root is localhost:3000
app.get('/tacos', function(req, res){ //<- req is request object, res is response object
    res.send('<h1>Tacos for dinner!</h1>');
});

// tell the server to listen on a port for HTTP request
// from the client, aka our browser
app.listen(3000, function(){
    console.log('listening on port 3000');
});