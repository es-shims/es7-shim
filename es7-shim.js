/*!
 * https://github.com/es-shims/es7-shim
 * @license es7-shim Copyright 2014 by contributors, MIT License
 * see https://github.com/es-shims/es7-shim/blob/master/LICENSE
 */

var $Array = require('./Array');

module.exports = {
	Array: $Array,
	shim: function shimES7() {
		$Array.prototype.includes.shim();
	}
};
