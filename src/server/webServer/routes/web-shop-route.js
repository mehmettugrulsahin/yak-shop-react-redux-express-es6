module.exports = ({ config }) => {
    const { viewTypes, httpResponses } = config;

    return (req, res, next) => {
        res.status(httpResponses.ok).render(viewTypes.webShop);
    };
};