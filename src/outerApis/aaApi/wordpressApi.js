
module.exports = {
    getPostbyCategory: function (category) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve({
                    content: category + ": this a mock post",
                    district: "Sydney"
                });
            }, 1000);
        })
    }
};
