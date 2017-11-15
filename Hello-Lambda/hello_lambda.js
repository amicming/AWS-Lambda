exports.handler = (event, context, callback) => {
	// This one see in Log output section
	console.log('From Console...');
	// You can see this one in under Details section
	callback(null, 'Hello from Lambda'); 
}