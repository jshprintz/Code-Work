// Required it first
let express = require('express');

// Declare it into a varaible
let app = express();

app.set('view engine', 'ejs');

// Homepage Get request
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Contact get request
app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

// Respond to a particular request
app.get('/profile/:name', function(req, res){
    let data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing'],
    };
    res.render('profile', {person: req.params.name, data: data});
});

// host
app.listen(3000);

