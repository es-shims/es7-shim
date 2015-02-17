var proto = require('./Array.prototype.js');

module.exports = {
	prototype: proto,
	shim: function shimArray() {
		proto.shim();
	}
};
