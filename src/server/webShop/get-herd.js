module.exports = ({ model }) => {
    return (day) => {
        return model.collect().then((data) => {
            data.yaks.forEach((yak) => {
                yak.age = (yak.age * 100 + day) / 100;
            });

            return data.yaks;
        });
    };
};