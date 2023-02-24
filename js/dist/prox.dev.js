"use strict";

var cartel = document.getElementById("cart2");
var i = 1;
var fecha = document.getElementsByTagName("h2")[0];
setInterval(function () {
  i++;

  if (i == 4) {
    i = 1;
  }

  cartel.setAttribute("src", "../img/cartel" + i + ".jpg");
}, 2000);
setInterval(function () {
  fecha.style.transform = "scale(2)";
  fecha.style.transition = "all 1s ease-in-out";
  setTimeout(function () {
    fecha.style.transform = "scale(1)";
  }, 1000);
}, 8000);