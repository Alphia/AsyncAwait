var syndicationApi = require('../outerApis/syncApi/syndicationApi');
var wordpressApi = require('../outerApis/syncApi/wordpressApi');

function getNewsArticle(){
    var post = wordpressApi.getPostbyCategory('news');
    var listings = syndicationApi.getListings(post.district);
    var article = {'content': post.content, 'listings': listings};
    return article;
}

for(var i=0; i<5; i++){
    console.log(getNewsArticle());
}