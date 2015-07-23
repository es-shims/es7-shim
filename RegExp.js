'use strict';

var escapeShim = require('./RegExp.escape');

module.exports = {
	escape: escapeShim,
	shim: function shimRegExp() {
		escapeShim.shim();
	}
};
