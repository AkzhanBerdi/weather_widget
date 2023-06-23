  // function getWeather() {
  //     let lat = 43.238949;
  //     let lon = 76.889709;
  //     let API_KEY = "c4d8acb5aab262556b924d5c93a6aeee";
  //     let baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    

  //     fetch(baseURL)
  //       .then(response => response.json())
  //       .then(json => {
  //         console.log(json);
  //       })
  //       .catch(error => {
  //         console.error('Error', error);
  //       });
  // }
  
  // getWeather();

  $(document).ready(function() {
    function getWeather() {
      let lat = 43.238949;
      let lon = 76.889709;
      let API_KEY = "54eb939a92c5e011541b2e37284b6379";
      let baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  
      // Make the API request
      $.getJSON(baseURL, function(data) {
        // Extract the relevant weather data
        let temperature = data.main.temp - 273.15;
        let condition = data.weather[0].description;
  
        // Update the HTML elements
        $("#temp-main").text(`${temperature.toFixed(2)}°C`);
        $("#condition").text(condition);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error:', errorThrown);
      });
    }
  
    // Call the function to get the weather
    getWeather();
  });
  