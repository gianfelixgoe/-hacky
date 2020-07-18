// Future JavaScript will go here

const latest_indian_news = "https://newsapi.org/v2/everything?q=todays+latest+india+news&apiKey=db520b75daaf446bad258843e3fc6848";

var spinnerDiv = document.getElementById("spinners");
var news_body = document.getElementById("json_news");


var getIndianNews = function() {
    news_body.innerHTML = getSpinners();
    fetch(latest_indian_news).then(response => {
      response.json().then(function(data) {
      if(data.articles !== null && data.articles.length > 0 )
      {
          let newsArticle = convertToArticleBody(data.articles);
          news_body.innerHTML = newsArticle;
      }
      }
    )})
  .then(error =>{
      news_body.innerHTML = getNoResultDiv();
  })
  }

  // Util functions
var getSpinners = function(){
    return "<div style='margin-left: 30%'>"+
           "<div class='spinner-grow text-danger' role='status'>"+
           "<span class='sr-only'>Loading...</span>"+
           "</div>"+
           "<div class='spinner-grow text-warning' role='status'>"+
           "<span class='sr-only'>Loading...</span>"+
           "</div>"+
           "<div class='spinner-grow text-info' role='status'>"+
           "<span class='sr-only'>Loading...</span>"+
           "</div>"+
           "</div>"
}

var convertToArticleBody = function(articleArray)
{
    let newsArticle = "<a>";
    for (let i = 0; i < articleArray.length; i++)
    {
        newsArticle += 
                    "<a target='_blank' class='article' href='"+articleArray[i].url+"'>"+
                    "<header>"+
                    "<span>"+articleArray[i].title+"</span>"+
                    "<time>"+articleArray[i].publishedAt+"</time>"+
                    "</header>"+
                    "<p>"+articleArray[i].description+"</p></a>";            
    }
    return newsArticle;
}

// Getting latest indian news on load
getIndianNews();