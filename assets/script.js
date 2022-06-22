// Declare variables
var cityLat = "";
var cityLon = "";
var myLink = "";


//add listener to search button

$("#newCity").on("click", function () {
    var value = $(this).siblings("input").val();
    console.log("You searched for " + value)

    //fetch data from weather 

    //make first call to get lat & lon
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + value + "&limit=1&appid=2b9bc0455fe9f94b38ffcf663b546cfe")
        .then(function (data) {
            return data.json();

        })
        .then(function (data) {
            cityLat = data[0].lat;
            cityLon = data[0].lon;
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&exclude={part}&appid=2b9bc0455fe9f94b38ffcf663b546cfe")
                .then(function (data) {
                    return data.json();
                })
                .then(function (data) {
                    console.log(data);
                    // display current weather
                    var temp = data.current.temp
                    var tempEl = $("<p>").text("temp: " + temp);
                    $("#current-weather").append(tempEl);
                    var uvi = data.current.uvi
                    var uviEl = $("<p>").text("uvi: " + uvi);
                    $("#current-weather").append(uviEl);
                    var humidity = data.current.humidity
                    var humEl = $("<p>").text("humidity: " + humidity);
                    $("#forecast").html("")
                    // 5-day forecast
                    for (i = 0; i < 5; i++) {
                        var daytemp = data.daily[i].temp.day
                        var dayUVI = data.daily[i].uvi
                        var dailydiv = $("<div>").addClass("col")
                        var tempEl = $("<p>").text("temp: " + daytemp)
                        dailydiv.append(tempEl)
                        $("#forecast").append(dailydiv)



                    }

                })

            //this is where I am stuck.  Line 24 should return a promise, but when I console log it, I get nothing.  
            //Plan to proceed:  define functions that use the code in 16-20 and 21 through 24, then this should all look a little cleaner
            //and I can hopefully figure out how to get my weather data fromf the 2nd call
            //Once I have that data, I'll use it to create elements that display on the page.

        })
    //2b9bc0455fe9f94b38ffcf663b546cfe   API KEY
})



//fetch(myLink).then(function(data){    console.log(data);})














