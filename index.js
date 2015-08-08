"use strict";

var util = require('util');


function formatServerAddress(address) {
    if (!address || !address.address) {
        throw new TypeError('Invalid input.');
    }

    if (address.family === 'IPV6') {
        return util.format('[%s]:%s', address.address, address.port);
    }
    else {
        return util.format('%s:%s', address.address, address.port);
    }
}

exports = module.exports = formatServerAddress;
