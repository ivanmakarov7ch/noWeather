//TODO: **                          ** Wheather Summary
//ADD the key and change units to imperial (or metric).

//Preston id="560447916"; Soda Springs id="5607916"; Fish Haven(Bear Lake Sands)id="5585010";
const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=d2fdc86a9958706a70d9f603bde9f1c3&units=imperial";
//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console. main.humidity
    // console.log(weatherInfo);
    document.getElementById("currently").innerHTML = weatherInfo.weather[0].description;
    document.getElementById("temperature").innerHTML = weatherInfo.main.temp;
    document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;
    document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;
  }); //end of "then" fat arrow function

// //TODO: **                             ** Five Days Forecast
const dd = new Date();
const todayDayNumber = dd.getDay();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL2 =
  "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d2fdc86a9958706a70d9f603bde9f1c3&units=imperial";
fetch(apiURL2)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
      let time = mylist[i].dt_txt;
      if (time.includes("21:00:00")) {
        console.log("Found an entry with 21:00:00 in the line. It was report " + i + " from the mylist of 40");
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }
        let theDayName = document.createElement("span");
        theDayName.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp; // + "&#xb0;" //VSCode prettier exstantion removing the backslesh!

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById("weatherforecast").appendChild(theDay);
      }
    }
  });
