module.exports = ({ serverConfig, addOrder }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const day = req.params.day;
        const order = req.body;

        return addOrder(day, order).then((newOrder) => {
            if (newOrder.complete) {
                res.status(httpResponses.created).json(newOrder.complete);
            }

            res.status(httpResponses.partialContent).json(newOrder.partial);        
        });
    };
};