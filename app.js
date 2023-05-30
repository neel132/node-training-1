const http = require('http');
const qs = require('querystring');
const hostname = '127.0.0.1'; // Defining hostname for the server
const port = 3000; // Defining port for node server
// Creating a server
const server = http.createServer((req, res) => {
	// console.log("Request =>", req);
	const url = req.url;
	console.log("Incoming url =>", url);
	if(req.method == 'POST') {
let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
			body = Buffer.from(Buffer.concat(body)).toString('base64');
			const response = JSON.parse(atob(body));
      console.log(typeof response);
      console.log(response._id);
    });
	}
	if(url === '/') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({
			data: {
				user_name: "ABC123",
				user_id: 1234,
				valid: true,
			}
		}));
	} else if(url === '/test') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end("Hello World");
	}
})
server.listen(port, hostname, () => {
	console.log(`Server listening on http://${hostname}:${port}`);
});