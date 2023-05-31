const { pipeline } = require('node:stream/promises');
const fs = require('node:fs');
const zlib = require('node:zlib');

async function run() {
	// Chaining streams within pipeline
	await pipeline(
		fs.createReadStream('archive.tar'), // Output for this is the input for the next
		zlib.createGzip(), // Output for this is the input for the next and input of this is the output of the previous stream
		fs.createWriteStream('archive.tar.gz'), // Input for this is the output of the previous stream
	);
	console.log("Pipeline executed successfully...");
}
run().catch(err => console.log("Error running pipeline =>", err));