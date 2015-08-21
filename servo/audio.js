var tessel = require('tessel');
var audio = require('audio-vs1053b').use(tessel.port['A']);

audio.on('data', function(data) {
	console.log(data.toString("hex"));
});

audio.startRecording();