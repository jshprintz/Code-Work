const fs = require('fs');
let daysOfWeek = require('./days-of-week');
 // Don't specify path when module is in node_modules
 const request = require('request');
 request(
 	'http://jsonplaceholder.typicode.com/users',
 	function(err, res, body) {
 		console.log(body);
 	}
 );


console.log(typeof fs);
console.log(daysOfWeek);

// fs.writeFile('./hello.txt', 'Heya!', function(){
//     console.log('Done making your file, cyber overlord!');
// });

