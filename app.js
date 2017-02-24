/*
Create Folder
touch app.js
npm init
mkdir public/images
mkdir views
npm install --save express
npm install --save ejs
npm install --save express-ejs-layouts
npm install --save body-parser //checks for form POSTS and does magic with the information
npm install --save spotify-web-api-node prettyjson //spotify web api
npm install --save inspect-process //handy for inspecting large objects (especially large ones)
mongod --config /usr/local/etc/mongod.conf //RUNS MongoDB 
mkdir views/layouts
touch views/layouts/main-layouts.ejs


Open App.js

const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express(); //creates 'instance' of Express

//MORE SPOTIFY
const SpotifyWebApi = require('spotify-web-api-node');
const spotify = new SpotifyWebApi();
spotify.searchTracks('thousand miles');
//SPOTIFY ABOVE

app.set('views', __dirname + '/views'); //point Express to EJS/HTML files in the Views folder
app.set('view engine', 'ejs'); //Express will use EJS package for files in Views
app.use(express.static('public')); //makes the Public folder public http://localhost:3000/images/1.png
app.use(expressLayouts); // for layout templates
app.use(bodyParser.urlencoded({ extended: true}));
app.set('layout', 'layouts/main-layouts');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res, next) => {
  res.render('index',{
    key: value,
    key2: value 2
  });
});


app.listen(3000, () => {
  console.log("Chuck is running");
});
*/
