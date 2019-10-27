/* http://www.mocky.io/v2/5dade3022d0000a542e4bd95 */

function getRestaurantsData() {

    const url = "http://www.mocky.io/v2/5dade3022d0000a542e4bd95";

    axios.get(url)
        .then(function(response) {
            modelRestaurantsData(response);
        })
        .catch(function(error) {
            handleErrors(error);
        })
        .finally(function(){
            initializeReastaurantsData();
        });

};

function handleErrors(error) {

    if(error.response) {
        console.log("An error occurred. This is an error log.");
        console.log("Data : " + error.response.data);
        console.log("Status : " + error.response.status);
        console.log("Headers : " + error.response.headers);
    } else if (error.request) {
        console.log("This is an error request : " + error.request);
    } else {
        console.log("Error : " + error.message);
    }
    console.log(error.config);
}

function modelRestaurantsData(restaurantsList) {

    if(restaurantsList) {
        restaurantsList.data.forEach(restaurant => {
           restaurantWrapper.push(new Restaurant(
               restaurant.restaurantId,
               restaurant.name,
               restaurant.address,
               restaurant.type
           ))
        });   
    } else {
        console.log("Undefined još uvijek. Wtf javascript?");
    }
};

function initializeReastaurantsData() {
    
    var listOfRestaurant = document.querySelector('.restaurant-list');

    for(let i = 0; i < restaurantWrapper.length; i++) {
        listOfRestaurant.innerHTML += "<p>" + restaurantWrapper[i].restaurantID + " " + restaurantWrapper[i].restaurantName + "</p>";
    }

}

// Call the function
// Until I can find a better way, this is the way.
getRestaurantsData();
