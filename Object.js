'use strict';

var getDescriptors = require('object.getownpropertydescriptors');

module.exports = {
	getOwnPropertyDescriptors: getDescriptors,
	shim: function shimObject() {
		getDescriptors.shim();
	}
};
