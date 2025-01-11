const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    // This error handling is insufficient. It doesn't properly handle
    // errors in asynchronous operations. 
    console.error('Error:', error);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  // In a real scenario this could be database connection, file system operation etc.
  // Example of operation that might fail
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Simulated asynchronous operation failed');
  }
  return 'Asynchronous operation successful';
}