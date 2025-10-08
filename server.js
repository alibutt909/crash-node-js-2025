import http from 'http';
const PORT = 8001;

const server = http.createServer((req, res) => {
  // res.
  // res.write (`Hellow All!`);
  // res.end();
  // 
  // res.setHeader('content-Type', 'text/plain');
  
  //setting the header for the server API
  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  // res.end('<h1>Hi why All...</h1>');
  // // // 
  // res.writeHead(500, {'content-Type': 'application/json'});
  // res.end(JSON.stringify({message: 'Server Error'}));
  res.writeHead(200, {'content-Type': 'text/html'});
  res.end(`<h1>Hi ZW!</h1>`);

  // 
});

server.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});