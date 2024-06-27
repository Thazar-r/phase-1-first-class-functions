function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    return function namedFunction() {
        return 'Named function called';
    };
}
const returnsAnAnonymousFunction = () => {
    return () => {
        return 'Anonymous function called';
    };
}