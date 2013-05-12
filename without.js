var each = require('std/each')

module.exports = function without(obj, prop) {
	var res = {}
	each(object, function(val, key) {
		if (key == prop) { return }
		res[key] = prop
	})
	return res
}