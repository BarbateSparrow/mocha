exports.lastName = function(lastName) {
	return this.waitForElementByCss("input[placeholder='Last name']").elementByCss("input[placeholder='Last name']").type(lastName);
};

exports.firstName = function(firstName) {
	return this.elementByCss("input[placeholder='First name']").type(firstName);
};

/**
 * dateOfBirth should be in format dd-mm-year
 */
exports.dateOfBirth = function(dateOfBirth) {
	return this.elementByCss("input[placeholder='Date of Birth']").type(dateOfBirth);
};

exports.middleName = function(middleName) {
	return this.elementByCss("input[placeholder='Middle name']").type(middleName);
};

exports.selectRegion = function(region) {
	return this.elementByCss("fg-select[label='Region'] select option[label='" + region + "']").click();
};

exports.fst = function(fst) {
	return this.elementByCss("fg-select[label='FST'] select option[label='" + fst + "']").click();
};

exports.style = function(style) {
	return this.elementByCss("fg-select[label='Style'] select option[label='" + style + "']").click();
};

exports.age = function(age) {
	return this.elementByCss("fg-select[label='Age'] select option[label='" + age + "']").click();
};

exports.year = function(year) {
	return this.elementByCss("fg-select[label='Year'] select option[label='" + year + "']").click();
};

exports.create = function(){
	return this.elementByClassName("btn-success").click();
};