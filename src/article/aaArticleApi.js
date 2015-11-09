var syndicationApi = require('../outerApis/aaApi/syndicationApi');
var wordpressApi = require('../outerApis/aaApi/wordpressApi');

async function getNewsArticle() {
    let post = await wordpressApi.getPostbyCategory('news');
    let listings = await syndicationApi.getListings(post.district);
    let article = {'content': post.content, 'listings': listings};
    return article;
}

//console.log(getNewsArticle());
//console.log("********************")
for(var i=0; i<5; i++){
    getNewsArticle().then(console.log)
}
