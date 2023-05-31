const { pipeline } = require('node:stream/promises');
const fs = require('node:fs');
const zlib = require('node:zlib');

async function run() {
	await pipeline(
		fs.createReadStream('archive.tar'),
		zlib.createGzip(),
		fs.createWriteStream('archive.tar.gz'),
	);
	console.log("Pipeline executed successfully...");
}
run().catch(err => console.log("Error running pipeline =>", err));