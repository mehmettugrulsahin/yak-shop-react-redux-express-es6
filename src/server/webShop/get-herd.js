module.exports = ({ model }) => {
    return model.collect().then((data) => {
        return data.yaks;
    });
};