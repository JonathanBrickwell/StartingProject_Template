// Model for creating the properties of the restaurants

const restaurantWrapper = [];

function Restaurant(restaurantID, restaurantName, restaurantAddress, restaurantType) {

    if(!(this instanceof Restaurant)) {
        return new Restaurant(
            restaurantID, 
            restaurantName, 
            restaurantAddress, 
            restaurantType);
    }

    this.restaurantID = restaurantID;
    this.restaurantName = restaurantName;
    this.restaurantAddress = restaurantAddress;
    this.restaurantType = restaurantType;
}



// Maybe this is useles...we'll see.

// var restaurantModel = (function() {

//     var restaurant = function(restaurantID, restaurantName, restaurantAddress, restaurantType) {
//         this.restaurantID = restaurantID;
//         this.restaurantName = restaurantName;
//         this.restaurantAddress = restaurantAddress;
//         this.restaurantType = restaurantType;
//     }

//     return {
//         init: restaurant
//     }

// })();
 
