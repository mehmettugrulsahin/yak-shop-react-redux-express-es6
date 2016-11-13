module.exports = ({ serverConfig }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const sampleStock = {
            'day': req.params.day,
            'milk' : 1104.48,
            'skins' : 3 
        };

        res.status(httpResponses.ok).json(sampleStock);
    };
};