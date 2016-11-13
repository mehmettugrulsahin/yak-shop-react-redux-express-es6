module.exports = ({ serverConfig }) => {
    const { httpResponses, errorMessages } = serverConfig;

    return (err, req, res, next) => {
        res.status(httpResponses.internalServerError).send(errorMessages.internalServerError);
    };
};
