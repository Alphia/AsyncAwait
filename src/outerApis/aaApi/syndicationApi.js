

module.exports = {
    getListings: function (district) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve([{'id': 'listing001'}, {'id': 'listing005'}]);
            }, 1000);
        })
    }
};
