module.exports = function(source) {
    return JSON.stringify(JSON.parse(source), function (key, value) {
        if (typeof value === 'number') {
            return undefined;
        }
        return value;
    });
};