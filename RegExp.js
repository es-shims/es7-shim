var escape = require('./RegExp.escape');

module.exports = {
	escape: escape,
	shim: function shimRegExp() {
		escape.shim();
	}
};
