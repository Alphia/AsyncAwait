var syndicationApi = require('../outerApis/asyncApi/syndicationApi');
var wordpressApi = require('../outerApis/asyncApi/wordpressApi');

function getNewsArticle(callback) {
    wordpressApi.getPostbyCategory('news', function (post) {
        syndicationApi.getListings(post.district, function (listings) {
            var article = {'content': post.content, 'listings': listings};
            callback(article);
        });
    });
}

for(var i=0; i<5; i++){
    getNewsArticle(console.log);
}