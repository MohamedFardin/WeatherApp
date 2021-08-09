$(document).ready(function () {
    // alert("The page is loaded");
    $("#searchInput").on("keyup", function (e) {
        var cityname = e.target.value;
        const APIKey = "1f8ba3ebd8d7fd93f1bbcabdb5cdf3c2";

        //Make request to server
        $.ajax({
            // url: 'api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid={API key}'
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,

        }).done(function (weatherdata) {
            console.log(weatherdata);

            // $("#profile").html(weatherdata.weather[0].description);
            $("#profile").html(`
            <div class="container">
                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                            <p class="card-text">The temperature at ${cityname} is ${weatherdata.main.temp} &#8451 and it feels like it is ${weatherdata.main.feels_like} &#8451</p>
                            <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this place</a>
                        </div>
                    </div>
                </div>
            </div>`);
        });
    });
});