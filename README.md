# liri-node-app

## LIRI Bot 

This assignment was completed for Rutgers Coding Bootcamp. The assignment required us to create a SIRI-like bot that would take in command lines in Terminal.
LIRI can be asked to show tweets, search for song information, search for movie information, or do a special predetermined task.


## Getting Started
  * Clone repository
  * Run 'npm install' in Terminal or GitBash
  * Run 'node liri.js' with one of the following commands



### Twitter Command 
 `node liri.js my-tweets`
  * Displays my last 20 tweets and the date they were created 



### Spotify Command 
 `node liri.js spotify-this-song <song name>`
  * Displays the following
    * Artist
    * Song Title 
    * Preview URL
    * Album Title
    
  * If no song is requested, you will see information about Ace of Base's "The Sign".

 
 
 ### OMdB Command 
  `node liri.js movie-this <movie name>`
  * Displays the following
    * Movie Title
    * Year Released
    * IMdB Rating
    * Rotten Tomatoes Rating
    * Country Produced
    * Language
    * Plot
    * Actors
    
  * If no movie is requested, you will see information about "Gladiator".

  
  
  ### Read File Command 
   `node liri.js do-what-it-says`
  * Takes information from random.txt and runs it through the spotify command


## Programs Used
- Node.js
- Twitter NPM Package - https://www.npmjs.com/package/twitter
- Spotify NPM Package - https://www.npmjs.com/package/spotify
- Request NPM Package - https://www.npmjs.com/package/request

## Built With
- Sublime Text - Text Editor

## Authors
- Sarika Matthew

## Instructors
- John Dougherty
- Tom Keel - TA
- Evan Arbeitman - TA
