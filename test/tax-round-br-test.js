var taxRound = require('../lib/tax-round-br')
    , should = require('should');

describe('tax-round-br', () => {
    it('sent 10.988 - should return 10.99', function () {
        var result = taxRound(10.988);
        should(result).be.equal(10.99);
    });

    it('sent 11.00 - should return 11.00', function () {
        var result = taxRound(10.998);
        should(result).be.equal(11.00);
    });

    it('sent 10.985 - should return 10.98', function () {
        var result = taxRound(10.985);
        should(result).be.equal(10.98);
    });

    it('sent 10.984 - should return 10.98', function () {
        var result = taxRound(10.984);
        should(result).be.equal(10.98);
    });

    it('sent 10.9852 - should return 10.98', function () {
        var result = taxRound(10.9852);
        should(result).be.equal(10.98);
    });

    it('sent 10.9855 - should return 10.99', function () {
        var result = taxRound(10.9855);
        should(result).be.equal(10.99);
    });

    it('sent 10.9854 - should return 10.98', function () {
        var result = taxRound(10.9854);
        should(result).be.equal(10.98);
    });

    it('sent 10.9859 - should return 10.99', function () {
        var result = taxRound(10.9859);
        should(result).be.equal(10.99);
    });

    it('sent 10.98544323 - should return 10.98', function () {
        var result = taxRound(10.98544323);
        should(result).be.equal(10.98);
    });

    ////////////////


    it('sent (666.06 + 1.5%) - should return 9.99', function () {
        var result = taxRound(666.06*(1.5/100));
        should(result).be.equal(9.99);
    });

    it('sent (666.25 + 1.5%) - should return 9.99', function () {
        var result = taxRound(666.25*(1.5/100));
        should(result).be.equal(9.99);
    });


    it('sent (665.11 + 1.5%) - should return 9.98', function () {
        var result = taxRound(665.11*(1.5/100));
        should(result).be.equal(9.98);
    });

    it('sent (667.04 + 1.5%) - should return 10.01', function () {
        var result = taxRound(667.04*(1.5/100));
        should(result).be.equal(10.01);
    });

    it('sent (667.03 + 1.5%) - should return 10.00', function () {
        var result = taxRound(667.03*(1.5/100));
        should(result).be.equal(10);
    });

    it('sent (-4.224869999999999) - should return -4.22', function () {
        var result = taxRound(-4.224869999999999);
        should(result).be.equal(-4.22);
    });

});