var newButton = "button[ng-click*='newWrestler()']";

exports.new = function() {
	return this.waitForElementByCss(newButton).elementByCss(newButton).click();
};