module.exports = ({ model }) => {
    return (day, order) => {
        return model.addOrder(day, order).then((realisedOrder) => {            
            return realisedOrder;
        });
    };
};