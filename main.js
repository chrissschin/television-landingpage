"use strict";

$(document).ready(function(){
	var options = {
		videoID: 'p-Bwd0Y48m4',
		start: 0,
		repeat: true,
	};

	if ($(window).width() < 479) {
		console.log($(window).width());
	}
	else {
		console.log("bigger");
		$("#wrapper").tubular(options);
	}

});
