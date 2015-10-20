var through = require('through2');
var split = require('split');
var even = false;

process.stdin
	.pipe(split())
	.pipe(through(function(line, _, next){
	if(even){
		this.push(line.toString().toUpperCase() + '\n');
	}else{
		this.push(line.toString().toLowerCase() + '\n');
	}
	even = !even;
	next();
})).pipe(process.stdout);

