const deppie = require('deppie');

const serverConfig = require('./server/server-config');
const router = require('./server/webserver/router');

const corsMiddleware = require('./server/webserver/cors-middleware/cors-middleware');
const errorMiddleware = require('./server/webserver/error-middleware/error-middleware');

const homeRoute = require('./server/webserver/routes/home-route');
const webShopRoute = require('./server/webserver/routes/web-shop-route');
const yakShopLoadRoute = require('./server/webserver/routes/yak-shop-load-route');
const yakShopStockRoute = require('./server/webserver/routes/yak-shop-stock-route');
const yakShopHerdRoute = require('./server/webserver/routes/yak-shop-herd-route');
const yakShopOrderRoute = require('./server/webserver/routes/yak-shop-order-route');

const server = require('./server/webserver/server');

const webpackConfig = require('./webpack-config');

const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const consolidate = require('consolidate');
const handlebars = require('handlebars');
const winston = require('winston');
const expressWinston = require('express-winston');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webServerModules = {
    serverConfig,
    router,
    corsMiddleware,
    errorMiddleware,    
    homeRoute,
    webShopRoute,
    yakShopLoadRoute,
    yakShopStockRoute,
    yakShopHerdRoute,
    yakShopOrderRoute,
    server,
    webpackConfig
};

const webShopModules = require('./server/webShop/web-shop-modules');

const initialPackages = {
    bodyParser,
    express,
    fs,
    fetch,
    path,
    consolidate,
    handlebars,    
    logger: winston,
    expressWinston,
    webpack,
    webpackDevMiddleware,
    webpackHotMiddleware
};

module.exports = deppie(Object.assign({}, webServerModules, webShopModules), initialPackages);