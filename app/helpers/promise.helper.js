const handlePromise = (promise) => {
    return promise
        .then((data) => [null, date])
        .catch((error) => [error, undefined]);
};

module.exports = handlePromise;