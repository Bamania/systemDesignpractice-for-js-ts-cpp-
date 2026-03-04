
const http = require('http');

function hitApiAndExit() {
    const apiUrl = 'http://localhost:3000/api/test';
   
    fetch(apiUrl)
        .then(res => {
            console.log(`Status: ${res.status}`);
            process.exit(0);
        })
        .catch(err => {
            console.error(`Error: ${err.message}`);
            process.exit(1);
        });
}

hitApiAndExit();
