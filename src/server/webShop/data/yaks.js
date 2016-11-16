module.exports = ({ fs, serverConfig, logger }) => {
    const { data } = serverConfig;

    const getYaks = () => {
        return new Promise((resolve, reject) => {
            fs.readFile(data.yaks.file, (err, data) => {
                if (err) {
                    logger.error('loading yaks file failed');
                    logger.error(err);
                    return reject();
                }

                const json = JSON.parse(data);
                logger.info('loading yaks file succeeded');
                return resolve(json);
            });
        });
    };

    const getYak = (id) => {

    };

    const setYak = (id) => {

    };

    return () => {
        getYaks,
        getYak,
        setYak
    }
};