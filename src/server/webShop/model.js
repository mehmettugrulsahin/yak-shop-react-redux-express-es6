module.exports = ({ orders, yaks, logger }) => {
    const ORDERS_RESULT = 0;
    const YAKS_RESULT = 1;

    const collect = () => {
        logger.info('Loading data model');
        return Promise.all([
                orders.getOrders(),
                yaks.getYaks()
            ]).then(
                (values) => {
                    logger.info('Data model successfully loaded');
                    return {
                        orders: values[ORDERS_RESULT],
                        yaks: values[YAKS_RESULT]
                    }
                }, 
                (error) => {
                    logger.error('Error loading data model');
                    logger.error(error);
                    return Promise.reject(config.lookup.logging.error);
                });
    };
    
    return {
        collect
    };
};