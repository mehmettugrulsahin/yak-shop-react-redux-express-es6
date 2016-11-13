module.exports = ({
    homeRoute,
    webShopRoute,
    express,
    config
}) => {
    const { routes } = config;

    return {
        setupRoutes: (server) => {
            /* eslint babel/new-cap: 0 */
            const router = express.Router();

            router.get(routes.favicon, (req, res) => {
                res.end();
            });

            router.get(routes.home, homeRoute);
            router.get(routes.webShop, webShopRoute);

            server.use(router);
        }
    };
};
