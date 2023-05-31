//TODO: The banner
const today = new Date();
const day = today.getDay();
if (day != 2) {
  // (day !=5) is original
  document.getElementById("banner").classList.toggle("hideBanner");
}

//TODO: The API banner
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    // console.log(towns);
    // console.log(towns[6].events);
    //****************************************************Declare Variables*************
    let sectionHTML = document.createElement("section");
    let townEvent1 = document.createElement("p");
    let townEvent2 = document.createElement("p");
    let townEvent3 = document.createElement("p");
    //****************************************************Assign Variables***************
    townEvent1.textContent = towns[6].events[0];
    townEvent2.textContent = towns[6].events[1];
    townEvent3.textContent = towns[6].events[2];
    // *******************************************Push Variables Into the HTML Code******
    sectionHTML.appendChild(townEvent1);
    sectionHTML.appendChild(townEvent2);
    sectionHTML.appendChild(townEvent3);
    document.getElementById("banner").appendChild(sectionHTML).classList.add("eventSection");
  });
