module.exports = ({ fs, serverConfig, logger }) => {
    const { data } = serverConfig;

    const getYaks = (day) => {
        return new Promise((resolve, reject) => {
            fs.readFile(data.yaks.file, (err, data) => {
                if (err) {
                    logger.error('reading yaks file failed');
                    logger.error(err);
                    return reject();
                }

                const yaks = JSON.parse(data);

                yaks.forEach((yak) => {
                    yak.age = yak.age + (day / 100);
                });

                logger.info('reading yaks file succeeded');
                return resolve(yaks);
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

    return {
        getYaks,
        setYaks
    }
};