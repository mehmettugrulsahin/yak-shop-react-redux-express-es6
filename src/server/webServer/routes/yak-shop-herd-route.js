module.exports = ({ serverConfig, getHerd }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const day = req.params.day;
        
        return getHerd(day).then((yaks) => {
            res.status(httpResponses.ok).json(yaks);
        }, next);
    };
};