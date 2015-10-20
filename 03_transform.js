var through = require('through2');
var stream = through(write,end);

function write(buffer, encoding, next){
	var text = buffer.toString().toUpperCase();
	this.push(text);
	next();
}

function end (done){
	done();
}

process.stdin.pipe(stream).pipe(process.stdout);

