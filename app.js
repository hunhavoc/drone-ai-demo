'use strict';


const NodeTello = require('./lib/nodetello.js');
const NodeTello_webclient = require('./lib/nodetello_webclient.js');

var webclient = new NodeTello_webclient('ffmpeg');	// in-browser video
	webclient.init();


var drone = new NodeTello();
	drone.save_video_path = "./video";
	drone.save_photo_path = "./photo";
	drone.tello_video_output = function (h264) { webclient.h264encoder_in(h264) };
	drone.tello_telemetry_config = { 
		px: "MVO.PX",
		py: "MVO.PY",
		pz: "MVO.PZ",
		state: "state"
	};
	drone.tello_telemetry_output = function (data) { webclient.telemetry_in(data); };
	drone.init();
	
	webclient.tello_cmd = function (data) { drone.tello_cmd(data); }
