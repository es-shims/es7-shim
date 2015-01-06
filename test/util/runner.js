var exec = require('runsync').exec;
module.exports = function (method, module) {
	console.log(method + ': running tests from "' + module + '"...');
	exec('npm explore ' + module + ' "npm install && npm test"', { stdio: 'inherit' });
};
