module.exports = ({ serverConfig }) => {
    const { viewTypes, httpResponses } = serverConfig;

    return (req, res, next) => {
        res.status(httpResponses.ok).render(viewTypes.webShop);
    };
};