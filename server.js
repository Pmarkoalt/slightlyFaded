const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express()

var PORT = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(`${__dirname}/public/`)));

app.use(express.static("./"));

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})
