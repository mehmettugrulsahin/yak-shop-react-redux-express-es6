module.exports = ({ serverConfig, getHerd }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        return getHerd.then((yaks) => {
            const herd = {
                'day': req.params.day,
                yaks
            };

            res.status(httpResponses.ok).json(herd);
        }, next);
    };
};