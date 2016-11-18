module.exports = ({ serverConfig, setHerd }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const yaks = req.body;

        return setHerd(yaks).then((newYaks) => {
            res.status(httpResponses.resetContent).json(newYaks);
        }, next);
    };
};