var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.set is going to be used for setting app
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

var articles = []

app.get("/articles", function(req, res) {
	console.log("MINES" + articles)
	res.render("articles/articleIndex",  {MyART: articles})
});

app.get("/articles/new", function(req, res) {
	res.render("articles/articleNew")
});

app.post("/articles", function(req,res) {
  articles.push(req.body);
  //console.log(articles);

  // res.send(req.body);
  res.render("articles/articleNew")	// this is where user is taken upon submit
});

app.get("/articles/:id", function(req,res){
	//index = query the param
	//send back the object with the id,
	//ex: articles[the index you paramed]
	//pass that object to the new page
		//	show.ejs could display contents from database articles based on link selected and index #
	res.render()
}
app.listen(3000);

// .email);
//   articles.push(req.body.fullName);
//   articles.push(req.body.funArticle)