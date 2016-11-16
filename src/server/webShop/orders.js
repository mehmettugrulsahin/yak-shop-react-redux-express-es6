module.exports = ({ fs, serverConfig, logger }) => {
    const { data } = serverConfig;

    const getOrders = () => {
        return new Promise((resolve, reject) => {
            fs.readFile(data.orders.file, (err, data) => {
                if (err) {
                    logger.error('loading orders file failed');
                    logger.error(err);
                    return reject();
                }

                const json = JSON.parse(data);
                logger.info('loading orders file succeeded');
                return resolve(json);
            });
        });
    };

    const getOrder = (id) => {

    };

    const setOrder = (id) => {

    };

    return {
        getOrders,
        getOrder,
        setOrder
    }
};