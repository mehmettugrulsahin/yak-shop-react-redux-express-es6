module.exports = ({ fs, serverConfig, logger }) => {
    const { data } = serverConfig;

    const getOrders = (day) => {
        return new Promise((resolve, reject) => {
            fs.readFile(data.orders.file, (err, data) => {
                if (err) {
                    logger.error('loading orders file failed');
                    logger.error(err);
                    return reject();
                }

                if (data.length == 0) {
                    data = '[]';
                }

                const orders = JSON.parse(data);
                logger.info('loading orders file succeeded');
                return resolve(orders);
            });
        });
    };

    const setOrders = (orders) => {
        fs.writeFile(data.orders.file, JSON.stringify(orders), (err) => {
            if (err) {
                logger.error('writing orders file failed');
                logger.error(err);
                return reject();
            }

            return getOrders();
        });
    };

    return {
        getOrders,
        setOrders
    }
};