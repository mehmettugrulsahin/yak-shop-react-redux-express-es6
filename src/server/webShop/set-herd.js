module.exports = ({ model }) => {
    return (yaks) => {
        model.setHerd(yaks);

        return model.collect(0).then((data) => {
            return data.yaks;
        });        
    }
};