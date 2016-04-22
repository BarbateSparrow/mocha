/**
 * Created by dmv on 08.04.16.
 */
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var wd = require('wd');
chai.use(require('chai-as-promised'));
var should = chai.should();
var assert = chai.assert
var expect = chai.expect;

describe('Login form tests', function() {
	this.timeout(10000);
	chaiAsPromised.transferPromiseness = wd.transferPromiseness;
	var browser;

	function initbr() {
		return browser.init({
			browserName: 'chrome'
		});
	}

	before(function() {

		browser = wd.promiseChainRemote();
		return browser.init({
			browserName: 'chrome'
		});
	});

	beforeEach(function() {
		return browser.get('http://streamtv.net.ua/base/');
	});

	after(function() {
		return browser.quit();
	});

	// it('login page should be loaded', function () {
	// 	return browser.elementByName('loginform').should.exists;
	// });

	xit('login with only user name', function() {

		return browser
		// 	.elementByCss("#username input")
		// 	.type("test").getValue().should.become('test'); //.then(function (argument) {
		// 	console.log(browser)
		// 	console.log(argument);
		// 	var el = argument.elementByCss("button").getTagName();;
		// 	console.log(el);
		// 	 assert.isNotOk(argument.elementByCss("button").isEnabled(), "Something wrong"); //getAttribute("disable").should.eventually.contains("dsable");
		// })
		// var el = browser.elementByCss("#username input").then(function(d) {
		// d.getValue();
		// });
		// console.log(el);
		// return assert.isOk(browser.elementByCss("button").isEnabled(), "Something wrong");
		// return browser.elementByCss("button").getAttribute("disable").should.eventually.contains("disable")
		// assert.isOk(browser.elementByCss("button").isEnabled(), "Login button should not been active");

		// return browser.elementByName('loginform').should.no
	});

	it('is login browser enabled', function() {
		return browser
				.elementByCss("#username input")
				.type("test")
				.elementByCss("input[type='password']")
				.type("test")

				.elementByCss("button")
				.isEnabled()
				.then(function (argument) {
					assert.isOk(argument);
				});





				// .getAttribute("disabled").then(function(d) {
				// 		console.log(d);
				// });
			// 	.click();
			// .elementByCss(".panel-heading").getAttribute("disabled").then(function(d) {
			// 			console.log(d);
			// 	});
		// return assert.isOk(browser.elementByCss("button").isEnabled(), "Something wrong");
	});
});