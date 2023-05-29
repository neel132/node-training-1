const fs = require('fs');

fs.writeFile('./test.txt', 'World!', (err) => {
	console.log("Error writing test.txt", err);
	if(!err) {
		console.log("Data Saved successfully");
	}
})

fs.readFile('./test.txt', (err, data) => {
	console.log("Error reading test.txt", err);
	console.log("File contents: ", data.toString());
});

