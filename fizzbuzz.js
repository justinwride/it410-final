module.exports = function (value) {
    if (value % 3 == 0 && value % 5 == 0) {
        return 'fizzbuzz';
    }
    if (value % 5 == 0) {
        return 'buzz'
    }
    if (value % 3 == 0) {
        return 'fizz'
    }
    return value
};