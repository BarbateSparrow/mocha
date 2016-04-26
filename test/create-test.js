var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var wd = require('wd');
chai.use(require('chai-as-promised'));
var should = chai.should();
var assert = chai.assert;
var expect = chai.expect;

var buildPage = require("../src/util");
var LoginPage = require("../src/pages/loginpage");
var WrestlersPage = require("../src/pages/wrestlers");
var NewWrestlerPage = require("../src/pages/newwrestler");

describe('Wrestlers tests', function() {
	this.timeout(10000);
	chaiAsPromised.transferPromiseness = wd.transferPromiseness;
	var browser;

	before(function() {
		browser = wd.promiseChainRemote();
		buildPage(wd, [LoginPage, WrestlersPage, NewWrestlerPage]);
		return browser.init({
			browserName: 'chrome'
		});
	});

	beforeEach(function() {
		return browser
			.get('http://streamtv.net.ua/base/')
			.enterUserName("auto")
			.enterUserPassword("test")
			.login();
	});

	after(function() {
		return browser.quit();
	});


	it('create new wrestler', function(done) {
		return browser
			.new()
			.lastName("Test")
			.firstName("User")
			.dateOfBirth("12-03-86")
			.middleName("TeUs")
			.selectRegion("Vynnitska")
			.fst("Dinamo")
			.style("FS")
			.age("Cadet")
			.year("2015")
			.create();
	});
});