'use strict';

var at = require('./String.prototype.at');
var trimLeft = require('./String.prototype.trimLeft');
var trimRight = require('./String.prototype.trimRight');

module.exports = {
	at: at,
	trimLeft: trimLeft,
	trimRight: trimRight,
	shim: function shimStringPrototype() {
		at.shim();
		trimLeft.shim();
		trimRight.shim();
	}
};
