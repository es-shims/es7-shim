/*!
 * https://github.com/es-shims/es7-shim
 * @license es7-shim Copyright 2014 by contributors, MIT License
 * see https://github.com/es-shims/es7-shim/blob/master/LICENSE
 */

'use strict';

var $Array = require('./Array');
var $Map = require('./Map');
var $Object = require('./Object');
var $RegExp = require('./RegExp');
var $Set = require('./Set');
var $SIMD = require('./SIMD');
var $String = require('./String');

module.exports = {
	Array: $Array,
	Map: $Map,
	Object: $Object,
	RegExp: $RegExp,
	Set: $Set,
	SIMD: $SIMD,
	String: $String,
	shim: function shimES7() {
		$Array.shim();
		$Map.shim();
		$Object.shim();
		$RegExp.shim();
		$Set.shim();
		$SIMD.shim();
		$String.shim();
	}
};
