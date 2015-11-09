
var sleeper = require('sleep');

module.exports = {
    getListings: function(district){
        sleeper.sleep(1);
        return [{'id': 'listing001'},{'id': 'listing005'}];
    }
};

