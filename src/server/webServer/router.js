module.exports = ({
    homeRoute,
    webShopRoute,
    yakShopLoadRoute,
    yakShopStockRoute,
    yakShopHerdRoute,
    yakShopOrderRoute,
    express,
    serverConfig
}) => {
    const { routes } = serverConfig;

    return {
        setupRoutes: (server) => {
            /* eslint babel/new-cap: 0 */
            const router = express.Router();

            router.get(routes.favicon, (req, res) => {
                res.end();
            });

            router.get(routes.home, homeRoute);

            router.get(routes.webShop, webShopRoute);

            
            router.post(routes.yakShopLoad, yakShopLoadRoute);
            
            router.get(routes.yakShopStock, yakShopStockRoute);
            
            // get herd on day T
            router.get(routes.yakShopHerd, yakShopHerdRoute);
            
            router.post(routes.yakShopOrder, yakShopOrderRoute);

            server.use(router);
        }
    };
};