var BuildPage = function(wd, pages) {
	var pages = arguments[1];
	for (var page = 0 ; page < pages.length ; page++) {
		for (var method in pages[page]) {
			wd.addPromiseChainMethod(method.toString(), pages[page][method]);
		}
	}
	return wd;
};
module.exports = BuildPage;