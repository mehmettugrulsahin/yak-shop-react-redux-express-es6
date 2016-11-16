module.exports = ({ model }) => {
    return (yaks) => {
        model.setHerd(yaks);

        return model.collect().then((data) => {
            return data.yaks;
        });        
    }
};