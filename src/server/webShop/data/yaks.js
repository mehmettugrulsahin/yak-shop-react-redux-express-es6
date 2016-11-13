module.exports = ({ serverConfig, logger }) => {
    const yaks = [
        { name: 'yak-1', age: 1, sex:'f' },
        { name: 'yak-2', age: 3, sex:'f' },
        { name: 'yak-3', age: 4, sex:'f' }
    ];

    const getYaks = () => {
        logger.info(initializeYaks.logMessages.initializeYaks);
        return Promise.resolve(yaks);
    };

    return {
        getYaks
    };
};