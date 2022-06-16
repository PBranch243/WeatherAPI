// Declare variables
var cityLat = "";
var cityLon = "";
var myLink = "";


//add listener to search button

$("#newCity").on("click", function () {
    var value = $(this).siblings("input").val();
    console.log(value)

    //fetch data from weather 

    //make first call to get lat & lon
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + value + "&limit=1&appid=2b9bc0455fe9f94b38ffcf663b546cfe")
        .then(function (data) {
            return data.json();

        }).then(function (data) {
            cityLat = data[0].lat;
            cityLon = data[0].lon;
            myLink = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&exclude={part}&appid=2b9bc0455fe9f94b38ffcf663b546cfe"

            console.log(myLink);

            //fetch("https://api.openweathermap.org/data/2.5/onecall?lat=cityLat&lon={lon}&exclude={part}&appid=2b9bc0455fe9f94b38ffcf663b546cfe")


            // console.log(data[0].lat)
            //2nd call to other API
        })
    //2b9bc0455fe9f94b38ffcf663b546cfe   API KEY


})















