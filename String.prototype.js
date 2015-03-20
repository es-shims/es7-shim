var at = require('./String.prototype.at');

module.exports = {
	at: at,
	shim: function shimStringPrototype() {
		at.shim();
	}
};
