const latest_indian_news = "https://newsapi.org/v2/everything?q=todays+latest+india+news&apiKey=7cbc46d369ec49efba7d4e1bd3df8b1a";

const query_search_news = "https://newsapi.org/v2/everything?q=query&apiKey=7cbc46d369ec49efba7d4e1bd3df8b1a";

var spinnerDiv = document.getElementById("spinners");
var news_body = document.getElementById('json_news');


var elem0 = {"source":{"id":null,"name":"PerthNow"},"author":"PerthNow","title":"Ketut takes to social media to confirm he and Rhonda are still together - PerthNow","description":"In what is basically the only good news to come out of 2020 Ketut has taken to social media to confirm he is still with Rhonda!","url":"https:\\/\\/www.perthnow.com.au\\/news\\/offbeat\\/ketut-takes-to-social-media-to-confirm-he-and-rhonda-are-still-together-ng-b881613056z","urlToImage":"https:\\/\\/images.s.perthnow.com.au\\/publication\\/B881613056Z\\/1595049188504_GOS2RELHM.2-1.JPG?imwidth=1024","publishedAt":"2020-07-18T05:12:00Z","content":"Just as we were about to throw 2020 in a bin fire never to be remembered a good news story comes along to prove all is not lost.\\r\\nIn a mystery that has plagued us for more than eight years insurance \\u2026 [+1740 chars]","titleScore":0.0333333333,"descriptionScore":0.2472222222,"contentScore":0.6,"allScore":0.3291666667}
var elem1 = {"source":{"id":null,"name":"Nine"},"author":"Maddison Leach","title":"Jacinda Ardern joins TikTok impersonator for hilarious parody video - 9Honey","description":"","url":"https:\\/\\/honey.nine.com.au\\/latest\\/jacinda-ardern-tik-tok-impersonator\\/37ee0abe-c95b-4aa1-b7e3-8b00b3cc72cb","urlToImage":"https:\\/\\/imageresizer.static9.net.au\\/sff6yYdXUdHbjDJY_YUZQlLfQ3g=\\/1200x628\\/smart\\/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F4552b4dc-5426-4ae1-ab8e-21b55ae06363","publishedAt":"2020-07-18T01:48:00Z","content":"Jacinda Ardern has teamed up with erm, herself, for her hilarious debut on video platform TikTok.\\r\\nThe Prime Minister of New Zealand is beloved for her personality as well as her policies, so it shou\\u2026 [+2143 chars]","titleScore":0.5,"descriptionScore":0.0,"contentScore":0.4454545455,"allScore":0.4590909091}
var elem2 = {"source":{"id":null,"name":"Sky Sports"},"author":"Sky Sports","title":"PL Review Podcast: Best Man Utd team since Fergie?","description":"Is the current Manchester United team the best since Sir Alex Ferguson retired in 2013? We discuss that and more on the Premier League Review Podcast.","url":"https:\\/\\/www.skysports.com\\/football\\/news\\/11095\\/12030760\\/premier-league-review-podcast-is-this-the-best-man-utd-team-since-sir-alex-ferguson-retired","urlToImage":"https:\\/\\/e1.365dm.com\\/20\\/07\\/1600x900\\/skysports-manchester-united_5029986.jpg","publishedAt":"2020-07-18T15:00:00Z","content":"Is the current Manchester United team the best since Sir Alex Ferguson retired in 2013? We discuss that and more on the Premier League Review Podcast.\\r\\nDownload the Sky Sports Football Podcast on: Sp\\u2026 [+3411 chars]","titleScore":1.0,"descriptionScore":0.5,"contentScore":0.5,"allScore":0.5714285714}
var elem3 = {"source":{"id":null,"name":"Motley Fool"},"author":"newsfeedback@fool.com (Christy Bieber)","title":"3 Key Signs More Stimulus Money Is on the Way in Late July","description":"There\'s good news for those hoping for more stimulus money!","url":"https:\\/\\/www.fool.com\\/investing\\/2020\\/07\\/18\\/3-key-signs-more-stimulus-money-is-on-the-way-in-l.aspx","urlToImage":"https:\\/\\/g.foolcdn.com\\/editorial\\/images\\/581129\\/money-pouring-out-of-a-faucet.jpg","publishedAt":"2020-07-18T10:33:00Z","content":"The IRS has sent out more than $269 billion in coronavirus stimulus money , but this cash was just a drop in the bucket for most Americans, who are now facing a recession with the unemployment rate a\\u2026 [+5489 chars]","titleScore":0.0666666667,"descriptionScore":0.6625,"contentScore":0.5,"allScore":0.3607142857}
var elem4 = {"source":{"id":null,"name":"The Indian Express"},"author":"Lifestyle Desk","title":"Happy Sawan Shivratri 2020: Wishes, images, status, quotes, messages, photos, and greetings","description":"Happy Sawan Shivratri 2020 Wishes Images, Quotes, Messages, Status, Photos, Pics: Every year during the month of Shravan, devotees across the country unite in their devotion and faith for Lord Shiva on Shravan Shivratri. Considered as one of the most auspicio\\u2026","url":"https:\\/\\/indianexpress.com\\/article\\/lifestyle\\/life-style\\/happy-sawan-shivratri-2020-wishes-images-status-quotes-messages-photos-and-greetings-6506837\\/","urlToImage":"https:\\/\\/images.indianexpress.com\\/2020\\/07\\/Sawan-Shivratri-feature.jpg?w=759","publishedAt":"2020-07-18T14:30:33Z","content":"Happy Sawan Shivratri 2020 Wishes Images: Happy Sawan Shivratri. (Designed by Gargi Singh)Happy Sawan Shivratri 2020 Wishes Images, Quotes, Messages, Status, Photos: Every year during the month of Sh\\u2026 [+1871 chars]","titleScore":0.8,"descriptionScore":0.65,"contentScore":0.8,"allScore":0.74}
var elem5 = {"source":{"id":null,"name":"Kotaku"},"author":"Zack Zwiezen","title":"What A Good Boy","description":"This week on Snapshots: Ghost of Tsushima is out and folks are already taking amazing pictures with its photo mode, a guitar-playing superhero, a calm cliffside sunset, a visitors from another planet, and a cute little fox.Read more...","url":"https:\\/\\/kotaku.com\\/what-a-good-boy-1844429280","urlToImage":"https:\\/\\/i.kinja-img.com\\/gawker-media\\/image\\/upload\\/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200\\/z9hmz5jkqoxg37krtu4o.png","publishedAt":"2020-07-18T20:00:00Z","content":null,"titleScore":0.7,"descriptionScore":0.3425,"contentScore":0.0,"allScore":0.4020833333}
var elem6 = {"source":{"id":null,"name":"Daily Mail"},"author":"By Chloe-lee Longhetti For Daily Mail Australia","title":"AAMI hilariously confirms that Rhonda and Ketut from the iconic adverts are \'STILL TOGETHER\' - Daily Mail","description":"Everyone remembers the iconic AAMI adverts that began in 2012 featuring star-crossed lovers Rhonda and Ketut.","url":"https:\\/\\/www.dailymail.co.uk\\/tvshowbiz\\/article-8531795\\/AAMI-hilariously-confirms-Rhonda-Ketut-iconic-adverts-TOGETHER.html","urlToImage":"https:\\/\\/i.dailymail.co.uk\\/1s\\/2020\\/07\\/16\\/23\\/30858698-0-image-a-15_1594940311740.jpg","publishedAt":"2020-07-16T22:59:13Z","content":"Everyone remembers the iconic AAMI adverts that began in 2012 featuring star-crossed lovers Rhonda and Ketut.\\r\\nAnd the insurance company confirmed this week that the fictional couple \'are still toget\\u2026 [+2282 chars]","titleScore":0.3333333333,"descriptionScore":0.5,"contentScore":0.3,"allScore":0.3428571429}

var json = [elem0, elem1]

var search = function()
{
    news_body.innerHTML = getSpinners();
    let newsArticle = convertToArticleBody(json);
    news_body.innerHTML = newsArticle; 
}

var getSuggestedNews = function(searchQuery) {
    news_body.innerHTML = getSpinners();
    let newsArticle = convertToArticleBody(json);
    news_body.innerHTML = newsArticle;  
}



var getIndianNews = function() {
    news_body.innerHTML = getSpinners();
    let newsArticle = convertToArticleBody(json);
    news_body.innerHTML = newsArticle; 
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

var getNoResultDiv = function()
{
    return "<div class = 'centre'>"+
        "<p>No Results Found</p>"+
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
                    "<p>"+articleArray[i].description+"</p><p></p><p></p></a>";            
    }
    return newsArticle;
}

var modifyQuery = function(searchInput){
    return searchInput.replace(" ","+");
}



// Getting latest indian news on load
getIndianNews();