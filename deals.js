var a =
{"BestDeals": [
  {
    "name": "Computer and Accessories Set",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./it.jfif"
  },
  {
    "name": "Games",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./games.jfif"
  },
  {
    "name": "Entertainment",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./entertainment.jfif"
  },
  {
    "name": "Sports",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./sports.jfif"
  },
  {
    "name": "Health",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./health.jfif"
  },
  {
    "name": "Clothes",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./clothes.jfif"
  },
  {
    "name": "Food",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./food.jfif"
  },
  {
    "name": "Beauty",
    "pprice": 120000,
    "nprice": 10800,
    "img": "./beauty.jfif"
  }
]
}
for(i=0; i<a["BestDeals"].length; i++)
{
var html='<div class="content"><div class="imgcont" style="background-image:url(\''+a["BestDeals"][i].img+'\');"></div><div class="name"><span>'+a["BestDeals"][i].name+'</span></div><div class="preprice"><span>Previous Price</span></div><div class="pprice"><span>Rs. '+a["BestDeals"][i].pprice+'</span></div><div class="newprice"><span>New Price</span></div><div class="nprice"> <span>Rs. '+a["BestDeals"][i].nprice+'</span></div><div class="addtocart"><button class="cartbtn"></button></div><div class="readmore"><button class="readmorebtn">Read More</button></span></div></div>'
$(".mid-bestdeals").append(html);
}