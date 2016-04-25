var BuildPage = function(wd, page) {
	console.log("in util module");
	console.log(page.toString);
	for (var method in page) {
		console.log(method);
		wd.addPromiseChainMethod(method.toString(), page[method]);
	}
	return wd;
}
module.exports = BuildPage;
console.log("after util module");