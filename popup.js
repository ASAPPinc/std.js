var extend = require('./extend'),
	each = require('./each')

module.exports = function(url, winID, opts) {
	opts = extend(opts || {}, module.exports.defaults)
	if (!opts['left']) { opts['left'] = Math.round((screen.width - opts['width']) / 2) }
	if (!opts['top']) { opts['top'] = Math.round((screen.height - opts['height']) / 2) }

	var res = []
	each(opts, function(val, key) { res.push(key+'='+val) })
	var popupStr = res.join(',')

	return window.open(url, winID, popupStr)
}

module.exports.defaults = {
	'width':       600,
	'height':      400,
	'left':        null,
	'top':         null,
	'directories': 0,
	'location':    1,
	'menubar':     0,
	'resizable':   0,
	'scrollbars':  1,
	'titlebar':    0,
	'toolbar':     0
}
