const http = require('http');
const hostname = '127.0.0.1'; // Defining hostname for the server
const port = 3000; // Defining port for node server
// Creating a server
const server = http.createServer((req, res) => {
	const url = req.url;
	console.log("Incoming url =>", url);
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