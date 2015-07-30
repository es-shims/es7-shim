'use strict';

var at = require('./String.prototype.at');
var padLeft = require('./String.prototype.padLeft');
var padRight = require('./String.prototype.padRight');
var trimLeft = require('./String.prototype.trimLeft');
var trimRight = require('./String.prototype.trimRight');

module.exports = {
	at: at,
	padLeft: padLeft,
	padRight: padRight,
	trimLeft: trimLeft,
	trimRight: trimRight,
	shim: function shimStringPrototype() {
		at.shim();
		padLeft.shim();
		padRight.shim();
		trimLeft.shim();
		trimRight.shim();
	}
};
