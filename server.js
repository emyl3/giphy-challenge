const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const favorites = require('./routes/favorites');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/favorites/list', favorites);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('server listening for requests on port:', server.address().port);
});
