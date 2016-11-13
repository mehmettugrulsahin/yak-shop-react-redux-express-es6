module.exports = ({ serverConfig }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        res.status(httpResponses.resetContent).json(req.body);
    };
};