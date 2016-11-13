module.exports = ({ config }) => {
    const { httpResponses, errorMessages } = config;

    return (err, req, res, next) => {
        res.status(httpResponses.internalServerError).send(errorMessages.internalServerError);
    };
};
