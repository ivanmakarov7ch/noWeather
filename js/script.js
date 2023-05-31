//TODO The time
const a = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("lastupdated").textContent = a.toLocaleDateString("en-US", options);

//TODO The nav hamburger script
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

//TODO: Active link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

//TODO: **            Local Storage
/* Calculates and alerts the user on how many days since their
last visit to the Gallery or welcomes them if this is their initial vist.
*/
const d = new Date();
let savedDate = new Date(localStorage.getItem("savedDate"));
const oneDay = 1000 * 60 * 60 * 24;
let difTime = d.getTime() - savedDate.getTime();
let difDays = Math.round(difTime / oneDay);
if ("savedDate" in localStorage) {
  document.getElementById("visitext").innerHTML = "Welcome Back - your last visit was " + difDays + " days ago.";
} else {
  document.getElementById("visitext").innerHTML = "Welcome to our Gallery";
}
saveDate();
function saveDate() {
  localStorage.setItem("savedDate", d);
}

//TODO: **             Storm Center
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}
