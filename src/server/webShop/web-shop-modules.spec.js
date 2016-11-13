const chai = require('chai');
const expect = chai.expect;

const model = require('./model');

const orders = require('./data/orders');
const yaks = require('./data/yaks');

const addOrder = require('./add-order');
const getHerd = require('./get-herd');
const getStock = require('./get-stock');
const setHerd = require('./set-herd');

const webShopModules = require('./web-shop-modules');

describe('web-shop-modules', () => {
    it('should expose all web shop modules for use by a dependency injection framework', () => {
        expect(webShopModules).to.eql({
            model,
            orders,
            yaks,
            addOrder,
            getHerd,
            getStock,
            setHerd
        });
    });
});
