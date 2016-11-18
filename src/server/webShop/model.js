module.exports = ({ orders, yaks, logger }) => {
    const ORDERS_RESULT = 0;
    const YAKS_RESULT = 1;
    const TEN_YAK_YEARS_IN_DAYS = 1000;
    const SKINS_ON_DAY_0 = 3;

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
            return getStock(day).then((stock) => {
                let realisedOrder;

                logger.info('Adding order');

                if (stock.milk >= order.data.milk && stock.skins >= order.data.skins) {
                    realisedOrder = {
                        complete: {
                            milk: order.data.milk,
                            skins: order.data.skins
                        }
                    }

                    newOrders.push({
                        customer: order.customer,
                        data: {
                            milk: realisedOrder.complete.milk,
                            skins: realisedOrder.complete.skins
                        }
                    });

                    orders.setOrders(newOrders);
                    logger.info('Order completely added');
                } else if (stock.milk >= order.data.milk || stock.skins >= order.data.skins) {
                    realisedOrder = {
                        partial: {
                            milk: stock.milk < order.data.milk ? stock.milk : order.data.milk,
                            skins: stock.skins < order.data.skins ? stock.skins : order.data.skins
                        }
                    }

                    newOrders.push({
                        customer: order.customer,
                        data: {
                            milk: realisedOrder.partial.milk,
                            skins: realisedOrder.partial.skins
                        }
                    });

                    orders.setOrders(newOrders);
                    logger.info('Order partially added');
                } else {
                    realisedOrder = {
                        none: {
                            milk: 0,
                            skins: 0
                        }
                    }
                    logger.info('Order not added');
                }

                return realisedOrder;
            });
        });
    };

    const getStock = (day) => {
        logger.info('Getting data model');
        return Promise.all([
                orders.getOrders(day),
                yaks.getYaks(day)
            ]).then(
                (values) => {
                    logger.info('Data model successfully loaded');

                    const orders = values[ORDERS_RESULT];
                    const yaks = values[YAKS_RESULT];

                    let milk = 0;
                    let skins = SKINS_ON_DAY_0;

                    yaks.forEach((yak) => {
                        const ageInDays = yak.age * 100;                        

                        if (ageInDays < TEN_YAK_YEARS_IN_DAYS) {
                            for(i = 0; i < day; ++i) {
                                milk += 50 - ((ageInDays + i) * 0.03);
                            }
                        }

                        if (yak.age >= 1) {
                            const shaveInterval = (8 + (ageInDays + i)) * 0.01;
                            skins += parseInt(day / shaveInterval);                            
                        }
                    });

                    orders.forEach((order) => {
                        milk -= order.data.milk;
                        skins -= order.data.skins;
                    });

                    return {
                        milk,
                        skins
                    }
                }, 
                (error) => {
                    logger.error('Error loading data model');
                    logger.error(error);
                    return Promise.reject(config.lookup.logging.error);
                });
    };

    return {
        collect,
        setHerd,
        addOrder,
        getStock
    };
};