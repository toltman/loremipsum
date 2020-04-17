// Problem: Generate Lorem Ipsum text of variable lengths
// Solution: Use Node.js to create a web server that will generate text to specifications

// Create a web server
const http = require("http");
const router = require("./router.js");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  router.get(req, res);
  router.post(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 4. Generate Lorem Ipsum
// 5. Deliver Lorem Ipsum text
