/*
USAGE: mind.on(gestureName, callback);

Gestures: blink, winkRight, winkLeft, lookRight, lookLeft, raiseBrow, furrowBrow, smile, clench, smirkRight, smirkLeft, laugh

*/

var mind = {
	hotkeys: {
		blink: "q",
		winkRight: "w",
		winkLeft: "e",
		lookRight: "r",
		lookLeft: "t",
		raiseBrow: "y",
		furrowBrow: "u",
		smile: "i",
		clench: "o",
		smirkRight: "p",
		smirkLeft: "a",
		laugh: "s"
	},
	handlers: {},
	handle: function(evt, data) {
		if (this.handlers[evt]) {
			for (var i = 0, len = this.handlers[evt].length; i < len; i++) {
				this.handlers[evt][i](data);
			}
		}	
	},
	on: function(evt, callback) {
		if (this.handlers[evt]) {
			this.handlers[evt].push(callback);
		} else {
			this.handlers[evt] = [callback];
		}
	},
	init: function() {
		for (var i in this.hotkeys) {

			(function(i) {
				console.log(mind.hotkeys[i]);
				$(document).bind('keydown', mind.hotkeys[i], function(){
					console.log(i);
					mind.handle(i);
				});	
			})(i);
		}	
	}
}

mind.init();


