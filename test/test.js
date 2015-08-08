"use strict";

var expect = require('chai').expect;
var formatServerAddress = require('..');

describe('#formatServerAddress', function () {
    it('should throw a TypeError if an invalid argument is passed', function () {
        expect(function () {
            formatServerAddress(null);
        }).to.throw(TypeError);
    });

    it('should correctly format IPV4 addresses', function () {
        var result = formatServerAddress({
            address: '127.0.0.1',
            family: 'IPv4',
            port: 80,
        });

        expect(result).to.equal('127.0.0.1:80');
    });

    it('should correctly format IPV6 addresses', function () {
        var result = formatServerAddress({
            address: '::',
            family: 'IPv6',
            port: 443,
        });

        expect(result).to.equal('[::]:443');
    });
});
