//! f is the wind chill factor in Fahrenheit
//! t is the air average temperature in Fahrenheit
//! s is the wind speed in miles per hour.

function computeWindChill() {
  //Get two inputs: t and s.
  //Compute Wind Chill by this formula below.
  // let t = parseFloat(document.getElementById("temperature").value);
  // console.log(t);
  // let s = parseFloat(document.getElementById("windSpeed").value);
  // console.log(s);
  let t = 50;
  let s = 5;
  if (t <= 50 && s >= 3) {
    let f = parseInt(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
    return f;
  } else {
    return NaN;
  }
}
let f = computeWindChill();
document.getElementById("windChill").innerHTML = f;
