const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');


  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading home page');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading about page');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (req.url === '/contact') {
    fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading contact page');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Invalid Request!');
  }
});

server.listen(5000, () => {
  console.log('The NodeJS server on port 5000 is now running…');
});
