var input = document.getElementById(".inputValue");
var main = document.getElementById(".city");
var temp = document.getElementById(".temp");
var desc = document.getElementById(".desc");
var humidity = document.getElementById(".humidity");
var wind = document.getElementById(".wind");
var button = document.getElementById(".submit");

button.addEventListener("click", function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=d315c972a4f925b7067746efe298eb67')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var cityValue = data['city'];
            var descValue = data['weather'][0]['description'];

            main.innerHTML = cityValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + tempValue;
            input.value = "";

        })

        .catch(err => alert("Wrong city name!"));
    })
