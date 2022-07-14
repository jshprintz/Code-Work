console.log("Javascript works!");

// - Create an Object called `bigfoot` with propterties of `shoesize`, `height`, and `current location`. 
// - Add some more properties you come up with on your own. 
// - BONUS: Add a method (or function, same deal) to your bigfoot object!
// - 4 min.
let anger = 0;
let loud = 0;

const bigfoot = {
    height: 10 + " feet",
    shoesize: 15 + " inches",
    weight: 400 + " pounds",
    favoriteSong: "Don't stop me now",

    scary() {
        anger++;
        loud++;
    }
};
//New property
bigfoot.isFuzzy = true;
//Change property
bigfoot.favoriteSong = "Why can't we be friends";

bigfoot.friendly = function(){
    anger--;
    loud--;
};

// Bracket setting
bigfoot['favoriteSong'] = 'Smells Like Teen Spirit';
bigfoot['shoesize'] = 20 + 'inches';


