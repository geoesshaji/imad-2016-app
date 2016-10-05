var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one': {
  title : 'Article One | Geoes Shaji'  ,
  heading : 'Article One',
  date : 'Oct 2nd 2016',
  content : `
    <p>This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article oneThis is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.</p>
    <p>This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article oneThis is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.</p>
    <p>This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article oneThis is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.</p>`
} ,
     'article-two': {
      title : 'Article Two | Geoes Shaji'  ,
      heading : 'Article Two',
      date : 'Oct 6th 2016',
      content : `
        <p>This is my first paragraph in Article Two
           This is my first paragraph in Article Two</p>`
} ,
     'article-three': {
      title : 'Article Three | Geoes Shaji'  ,
      heading : 'Article Three',
      date : 'Oct 12th 2016',
      content : `
        <p>This is my first paragraph in Article Three
           This is my first paragraph in Article Three</p>`
} ,
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewpoint" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    <h3>${heading}</h3>
                </div>
                <div>${date}</div>
                <div>
                    ${content}
                </div>
                <div>
                    <textarea name = "commentBox" placeholder="Type your comments here Please."></textarea>
                </div>
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res){
    counter = counter +1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req, res){//Now it is in the form of a query as /submit-name?name=xxxx
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
