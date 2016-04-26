exports.enterUserName = function(name) {
	return this.waitForElementByCss("#username input").elementByCss("#username input").type(name);
};

exports.enterUserPassword = function(password) {
	return this.elementByCss("input[type='password']").type(password);
};

exports.login = function() {
	return this.elementByCss("button").click();
};