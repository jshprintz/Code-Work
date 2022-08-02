// Load express
const express = require('express');

// Create our express app
const app = express();

// Access our database
const invitesDb = require('./data/party-invites');


// Get request from client and respond with render
app.get('/home', function(req, res){
    res.render('home.ejs');
});

// Party route

app.get('/invites', function(req, res) {
    res.render('invites/index.ejs', {
        invites: invitesDb.getAll()
    });
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
