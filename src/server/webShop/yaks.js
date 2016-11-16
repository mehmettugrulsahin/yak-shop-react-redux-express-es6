module.exports = ({ fs, serverConfig, logger }) => {
    const { data } = serverConfig;

    const getYaks = () => {
        return new Promise((resolve, reject) => {
            fs.readFile(data.yaks.file, (err, data) => {
                if (err) {
                    logger.error('reading yaks file failed');
                    logger.error(err);
                    return reject();
                }

                const json = JSON.parse(data);
                logger.info('reading yaks file succeeded');
                return resolve(json);
            });
        });
    };

    setYaks = (yaks) => {
        fs.writeFile(data.yaks.file, JSON.stringify(yaks), (err) => {
            if (err) {
                logger.error('writing yaks file failed');
                logger.error(err);
                return reject();
            }

            return getYaks();
        });
    };

    const getYak = (id) => {

    };

    const setYak = (id) => {

    };

    return {
        getYaks,
        setYaks,
        getYak,
        setYak
    }
};