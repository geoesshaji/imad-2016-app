var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
  title : 'Article One | Geoes Shaji'  ,
  heading : 'Article One',
  date : 'Oct 2nd 2016',
  content : `
    <p>This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article oneThis is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.</p>
    <p>This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article oneThis is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.</p>
    <p>This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article oneThis is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.This is my first paragraph in Article one.</p>`
};

var articletwo = {
  title : 'Article Two | Geoes Shaji'  ,
  heading : 'Article Two',
  date : 'Oct 6nd 2016',
  content : `
    <p>This is my first paragraph in Article Two
       This is my first paragraph in Article Two</p>`
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
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req, res){
   res.send(createTemplate(articleone));
});

app.get('/article-two',function(req, res){
    res.send(createTemplate(articletwo));
});

app.get('/article-three',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
