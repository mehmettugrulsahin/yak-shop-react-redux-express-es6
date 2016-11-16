module.exports = ({ orders, yaks, logger }) => {
    const ORDERS_RESULT = 0;
    const YAKS_RESULT = 1;

    const collect = (day) => {
        logger.info('Loading data model');
        return Promise.all([
                orders.getOrders(day),
                yaks.getYaks(day)
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
    
    const setHerd = (newYaks) => {
        logger.info('Setting herd');
        yaks.setYaks(newYaks);
        logger.info('Herd successfully set');
    };

    const addOrder = (day, order) => {            
        return orders.getOrders().then((newOrders) => {
            logger.info('Adding order');
            newOrders.push(order);
            orders.setOrders(newOrders);
            logger.info('Order successfully added');

            return {
                complete: order
            };
        });
    };

    return {
        collect,
        setHerd,
        addOrder
    };
};