async function fetchData() {
    // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fc3532a8a0mshe0e4e48b92213cap16182fjsn232d131e4cd9',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };


    const getWeather = async(city) => {
        cityName.innerHTML = city
        try {
            const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
            const response = await fetch(url, options);
            const result = await response.json(); // Parse JSON response

            // Access properties from the parsed JSON
            // document.getElementById('cloud_pct').innerHTML = result.cloud_pct;
            document.getElementById('temp').innerHTML = result.temp;
            document.getElementById('temp2').innerHTML = result.temp;
            document.getElementById('min_temp').innerHTML = result.min_temp;
            document.getElementById('max_temp').innerHTML = result.max_temp;
            document.getElementById('feels_like').innerHTML = result.feels_like;
            document.getElementById('humidity').innerHTML = result.humidity;
            document.getElementById('humidity2').innerHTML = result.humidity;
            document.getElementById('wind_speed').innerHTML = result.wind_speed;
            document.getElementById('wind_speed2').innerHTML = result.wind_speed;
            document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
            document.getElementById('sunrise').innerHTML = result.sunrise;
            document.getElementById('sunset').innerHTML = result.sunset;
        } catch (error) {
            console.error(error);
        }
    }
    submit.addEventListener("click", (e)=> {
        e.preventDefault()
        getWeather(city.value)
    })

    getWeather("Delhi")
}

fetchData();



