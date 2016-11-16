module.exports = ({ model }) => {
    return (day) => {
        return model.getStock(day).then((data) => {
            return data;
        });
    };
};