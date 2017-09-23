var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
  'article-one': {
    title: ``,
    links: ``,
    heading: ``,
    date: ``,
    content: ``,  
  },
  'article-two': {
    title: ``,
    links: ``,
    heading: ``,
    date: ``,
    content: ``,  
  },
  'article-three': {
    title: ``,
    links: ``,
    heading: ``,
    date: ``,
    content: ``,  
  }
};

function createTemplate(cont) {
  var title = cont.title;
  var links = cont.links;
  var heading = cont.heading;
  var date = cont.date;
  var content = cont.content;
  
  var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="style.css">
    </head>
    <body>
        <div>
            ${links}
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </body>
</html> `;
  
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  articleName = req.params.articleName
  res.send(createTemplate(articleName));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});