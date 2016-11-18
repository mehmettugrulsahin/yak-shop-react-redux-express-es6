module.exports = ({ serverConfig, addOrder }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const day = req.params.day;
        const order = req.body;

        return addOrder(day, order).then((realisedOrder) => {
            if (realisedOrder.complete) {
                res.status(httpResponses.created).json(realisedOrder.complete);
            }
            else if (realisedOrder.partial) {
                res.status(httpResponses.partialContent).json(realisedOrder.partial);
            }
            else {
                res.status(httpResponses.notFound).json(realisedOrder.none); 
            }            
        });
    };
};