
var sleeper = require('sleep');

module.exports = {
    getPostbyCategory: function(category){
        sleeper.sleep(1);
        return {
            content: category + ": this a mock post",
            district: "Sydney"
        }
    }
};