module.exports = ({ serverConfig, getStock }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const day = req.params.day;

        return getStock(day).then((stock) => {
            res.status(httpResponses.ok).json(stock);
        }, next);
    };
};