module.exports = {
    getListings: function (district, callback) {
        setTimeout(function () {
                callback([{'id': 'listing001'}, {'id': 'listing005'}])
            },
            1000
        );
    }
};

