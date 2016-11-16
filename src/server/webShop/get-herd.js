module.exports = ({ model }) => {
    return (day) => {
        return model.collect(day).then((data) => {
            return data.yaks;
        });
    };
};