//
//
require("dotenv").config();

var keys = require('./keys.js');
var fs = require('fs');

var twitter = require('twitter');
var client = new twitter(keys.twitter);

var spotifyRequire = require('node-spotify-api');
var spotify = new spotifyRequire(keys.spotify);


var request = require('request');


var processArg = process.argv;
var action = process.argv[2];

var title = "";

//loop for multiple words

for (var i = 3; i < processArg.length; i++){
  
  if(i > 3 && i < processArg.length){
    title = title + "+" + processArg[i];
  } 

  else {
    title = title + processArg[i];
  }

}

//different actions

if (action === "my-tweets"){

	showTweets();

}

else if (action === "spotify-this-song"){

	 if (title){

      spotifyThis(title);

    } 

    else {

      spotifyThis("The Sign Ace of Base");

    }

}

else if (action === "movie-this"){

	if(title){

      omdbData(title);
    } 

    else {

      omdbData("Gladiator");

    }

}

else if (action === "do-what-it-says"){
	
	 doWhat();

}

else {

	console.log("Enter one of the following: my-tweets, spotify-this-song, movie-this, do-what-it-says");
  	
}

function showTweets(){ //TWITTER
  
  var userId = {user_id: 'mynabirdy'};

  client.get('statuses/user_timeline', userId, function(error, tweets, response){

    if(!error) {

      for(var i = 0; i < tweets.length; i++) {
        
        console.log("-------");
        var date = tweets[i].created_at;
        console.log("@mynabirdy: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        console.log("-------");
        
      }

    }

    else {

      console.log(error);
    }

  });

}

function spotifyThis(song){ // SPOTIFY

  spotify.search({ type: 'track', query: song, limit: 1}, function(error, data){
    
    if(!error) {

      for (var i = 0; i < data.tracks.items.length; i++){
        var songData = data.tracks.items[0];
        
        console.log("-------");

        console.log("Artist: " + songData.artists[0].name);
        
        console.log("Song Title: " + songData.name);
        
        console.log("Preview Link: " + songData.preview_url);
        
        console.log("Album: " + songData.album.name);
        
        console.log("-------");

      }

    } 

    else {

      console.log(error);

    }

  });

}

function omdbData(movie){ //OMdB

  var apiKey = "7e33fbf3";
  var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&apikey='+ apiKey + '&tomatoes=true&plot=short';

  request(omdbURL, function (error, response, body){

    
    if(!error){
      
      var body = JSON.parse(body);

      console.log("-------------------");

      console.log("Title: " + body.Title);
      
      console.log("Year Relesed: " + body.Year);
      
      console.log("IMdB Rating: " + body.imdbRating);
      
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      
      console.log("Country Produced: " + body.Country);
      
      console.log("Language: " + body.Language);
      
      console.log("Plot: " + body.Plot);
      
      console.log("Actors: " + body.Actors);

      console.log("-------------------");

    } 

    else {

      console.log(error);
    }

    if(movie === "Gladiator"){
      
      console.log("-------");
      
      console.log("If you haven't watched 'Gladiator,' then you should: http://www.imdb.com/title/tt0172495/");
      
      console.log("It's on Netflix!");

    }

  });

}

function doWhat(){ // READ TXT FILE

  fs.readFile('random.txt', "utf8", function(error, data){
    
    var content = data.split(',');

    spotifyThis(content[1]);

  });

}


  
    
