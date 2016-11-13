module.exports = ({
    serverConfig,
    path,
    consolidate,
    bodyParser,
    express,
    router,
    errorMiddleware,
    corsMiddleware,
    logger,
    expressWinston,
    webpackConfig,
    webpack,
    webpackDevMiddleware,
    webpackHotMiddleware
}) => {    
    const { templateEngine } = serverConfig;
    const compiler = webpack(webpackConfig);    

    let SERVER_PORT;
    
    const getServer = () => {
        SERVER_PORT = process.env.SERVER_PORT || 8081;
        return express();
    };
    
    const setWebpackDevMiddleware = (server) => {
        server.use(webpackDevMiddleware(compiler, {
          noInfo: true,
          publicPath: webpackConfig.output.publicPath
        }));
    };

    const setWebpackHotMiddleware = (server) => {
        server.use(webpackHotMiddleware(compiler));
    };

    const setLoggingMiddleware = (server) => {
        server.use(expressWinston.logger({
            transports: [
                new logger.transports.Console({
                    json: true,
                    colorize: true
                })
            ],
            meta: false
        }));
    };

    const setBodyParsingMiddleware = (server) => {
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true })); 
    };

    const setCorsMiddleware = (server) => {
        server.use(corsMiddleware);
    };

    const setTemplateMiddleware = (server) => {
        server.engine(templateEngine.name, consolidate.handlebars);
        server.set('views', path.join(__dirname, 'views/'));
        server.set('view engine', templateEngine.name);
    };

    const setRoutes = (server) => {
        router.setupRoutes(server);
    };

    const setErrorMiddleware = (server) => {
        server.use(errorMiddleware);
    };

    const server = getServer();

    setWebpackDevMiddleware(server);
    setWebpackHotMiddleware(server);
    setLoggingMiddleware(server);
    setBodyParsingMiddleware(server);
    setCorsMiddleware(server);
    setTemplateMiddleware(server);
    setRoutes(server);
    setErrorMiddleware(server);

    return server.listen(SERVER_PORT, () => {
        logger.info(`Listening on port ${SERVER_PORT}`);
    });
};
