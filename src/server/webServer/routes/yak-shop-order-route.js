module.exports = ({ serverConfig }) => {
    const { httpResponses } = serverConfig;

    return (req, res, next) => {
        const sampleOrderResult = {
            'day': req.params.day,
            'body' : req.body
        };

        res.status(httpResponses.created).json(sampleOrderResult);
        // res.status(httpResponses.partialContent);
    };
};