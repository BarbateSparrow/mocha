var BuildPage = function(wd, page) {
	for (var method in page) {
		wd.addPromiseChainMethod(method.toString(), page[method]);
	}
	return wd;
}
module.exports = BuildPage;