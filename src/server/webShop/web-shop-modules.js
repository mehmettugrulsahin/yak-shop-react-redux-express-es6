const model = require('./model');

const orders = require('./orders');
const yaks = require('./yaks');

const addOrder = require('./add-order');
const getHerd = require('./get-herd');
const getStock = require('./get-stock');
const setHerd = require('./set-herd');

module.exports = {
    model,
    orders,
    yaks,
    addOrder,
    getHerd,
    getStock,
    setHerd
};
