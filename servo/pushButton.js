var http = require('http');
var server = http.createServer();
var tessel = require('tessel');
var servolib = require('servo-pca9685');
var infraredlib = require('ir-attx4');
var infrared = infraredlib.use(tessel.port['C']);  

var servo = servolib.use(tessel.port['A']);

var servo1 = 1;


servo.on('ready', function () {
	servo.move(servo1, 0.5);
	server.listen(1337, function () {
		console.log('Server listening!');
	});

	var moveRight = function() {
		servo.move(servo1, 0.8);
	};

	var moveLeft = function() {
		servo.move(servo1, 0.2);
	};
	infrared.on("ready", function() {
	});
	servo.configure(servo1, 0.05, 0.12, function () {
		infrared.on('data', function(data) {
			setTimeout(moveLeft, 1000);
			setTimeout(moveRight, 2000);
		});
		server.on('request', function (req, res) {
			res.end();
			setTimeout(moveLeft, 1000);
			setTimeout(moveRight, 2000);
		});
	});
});