#! /usr/bin/env node
var http = require("http");

setTimeout(console.log.bind(null, "there's more"), 700);

http.get("http://172.20.10.5:1337/", function(err, res) {
	console.log("your elevator is waiting.");
});