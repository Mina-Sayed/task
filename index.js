const fs = require('fs');

let regEx = /\bhelp\b/gi

let matches;


fs.readFile('js', 'utf-8', (err, data) => {

     matches = data.match(regEx);

     console.log(matches.length);
})

