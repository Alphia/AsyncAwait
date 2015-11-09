module.exports = {
    getPostbyCategory: function (category, callback) {
        setTimeout(function () {
                callback({
                    content: category + ": this a mock post",
                    district: "Sydney"
                })
            },
            1000
        );
    }
};