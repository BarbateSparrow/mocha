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

var buildPage = require("../src/util");
var LoginPage = require("../src/pages/loginpage");

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
		buildPage(wd, LoginPage);
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

	xit('login page should be loaded', function() {

	});

	xit('login with only user name', function() {

	});

	it('is login button enabled', function() {
		return browser
			.enterUserName("test")
			.enterUserPassword("test")
			.elementByCss("button")
			.isEnabled()
			.then(function(argument) {
				assert.isOk(argument);
			});
	});
});