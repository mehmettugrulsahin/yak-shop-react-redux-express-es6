// const expect = require('chai').expect;
// const sinon = require('sinon');
// const spy = sinon.spy;
// const proxyquire = require('proxyquire').noCallThru();

// const mockWebServerModules = {
//     serverConfig: {},
//     router: {},
//     corsMiddleware: {},
//     errorMiddleware: {},   
//     homeRoute: {},
//     webShopRoute: {},
//     yakShopHerdRoute: {},
//     yakShopLoadRoute: {},
//     yakShopOrderRoute: {},
//     yakShopStockRoute: {},
//     server: {},
//     webpackConfig: {}
// };

// const mockWebShopModules = {
//     model: {},
//     orders: {},
//     yaks: {},
//     addOrder: {},
//     getHerd: {},
//     getStock: {},
//     setHerd: {}
// };

// const mockInitialPackages = {
//     bodyParser: {},
//     express: {},
//     fs: {},
//     fetch: {},
//     path: {},
//     consolidate: {},
//     handlebars: {},    
//     logger: {},
//     expressWinston: {},
//     webpack: {},
//     webpackDevMiddleware: {},
//     webpackHotMiddleware: {}
// };

// function intializeMain() {
//     const deppieSpy = spy();

//     proxyquire('./main', {
//         deppie: deppieSpy,

//         // web server modules
//         './server/server-config': mockWebServerModules.serverConfig,

//         './server/webServer/router': mockWebServerModules.router,

//         './server/webServer/cors-middleware/cors-middleware': mockWebServerModules.corsMiddleware,
//         './server/webServer/error-middleware/error-middleware': mockWebServerModules.errorMiddleware,

//         './server/webServer/routes/home-route': mockWebServerModules.homeRoute,
//         './server/webServer/routes/web-shop-route': mockWebServerModules.webShopRoute,
        
//         './server/webServer/routes/web-shop-load': mockWebServerModules.yakShopLoadRoute,
//         './server/webServer/routes/web-shop-stock': mockWebServerModules.yakShopStockRoute,
//         './server/webServer/routes/web-shop-herd': mockWebServerModules.yakShopHerdRoute,
//         './server/webServer/routes/web-shop-order': mockWebServerModules.yakShopOrderRoute,

//         './server/webServer/server': mockWebServerModules.server,

//         './webpack-config': mockWebServerModules.webpackConfig,

//         // web shop modules
//         './server/webShop/web-shop-modules': mockWebShopModules,

//         // initial packages
//         'body-parser': mockInitialPackages.bodyParser,
//         express: mockInitialPackages.express,
//         fs: mockInitialPackages.fs,
//         'node-fetch': mockInitialPackages.fetch,
//         path: mockInitialPackages.path,
//         consolidate: mockInitialPackages.consolidate,
//         handlebars: mockInitialPackages.handlebars,
//         winston: mockInitialPackages.logger,
//         'express-winston': mockInitialPackages.expressWinston,
//         webpack: mockInitialPackages.webpack,
//         'webpack-dev-middleware': mockInitialPackages.webpackDevMiddleware,
//         'webpack-hot-middleware': mockInitialPackages.webpackHotMiddleware
//     });

//     return deppieSpy;
// }

// describe('main', () => {
//     let deppieSpy;
//     let mockWebServerAndWebShopModules;

//     beforeEach(() => {
//         mockWebServerAndWebShopModules = {
//             serverConfig: mockWebServerModules.serverConfig,
//             router: mockWebServerModules.router,
//             corsMiddleware: mockWebServerModules.corsMiddleware,
//             errorMiddleware: mockWebServerModules.errorMiddleware,
//             homeRoute: mockWebServerModules.homeRoute,
//             webShopRoute: mockWebServerModules.webShopRoute,
//             yakShopHerdRoute: mockWebServerModules.yakShopHerdRoute,
//             yakShopLoadRoute: mockWebServerModules.yakShopLoadRoute,
//             yakShopOrderRoute: mockWebServerModules.yakShopOrderRoute,
//             yakShopStockRoute: mockWebServerModules.yakShopStockRoute,
//             server: mockWebServerModules.server,
//             webpackConfig: mockWebServerModules.webpackConfig,

//             model: mockWebShopModules.model,
//             orders: mockWebShopModules.orders,
//             yaks: mockWebShopModules.yaks,
//             addOrder: mockWebShopModules.addOrder,
//             getHerd: mockWebShopModules.getHerd,
//             getStock: mockWebShopModules.getStock,
//             setHerd: mockWebShopModules.setHerd
//         };
//     });

//     it('should initialize deppie with the correct modules', () => {
//         deppieSpy = intializeMain();

//         expect(deppieSpy).to.have.been.calledOnce.calledWith(mockWebServerAndWebShopModules, mockInitialPackages);
//     });
// });
