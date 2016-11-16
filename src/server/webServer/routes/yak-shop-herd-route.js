module.exports = ({ serverConfig, getHerd }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        return getHerd(req.params.day).then((yaks) => {
            res.status(httpResponses.ok).json(yaks);
        }, next);
    };
};