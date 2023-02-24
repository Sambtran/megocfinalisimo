"use strict";

if (screen.width < 768) {
  var updatear = function updatear(params) {
    var logo = document.getElementById("logo");
    var cont = document.getElementById("nav");
    logo.addEventListener("click", function (ev) {
      click++;
      console.log(click);

      if (click == 1) {
        cont.innerHTML = " <img id=\"logo\" src=\"../img/Megoc.png\" alt=\"Logo de megoc peque\xF1o\" /> <a href=\"\">\n          <i class=\"fa-brands fa-facebook\"></i>Facebook\n        </a>\n        <a href=\"\"><i class=\"fa-regular fa-envelope\"></i>Email</a>\n        <a href=\"\"><i class=\"fa-brands fa-instagram\"></i>Instagram</a>";
      } else {
        cont.innerHTML = "      <img id=\"logo\" src=\"../img/Megoc.png\" alt=\"Logo de megoc peque\xF1o\" />\n      <a href=\"./quienes.html\">\n        <div>\n          <i class=\"fa-solid fa-book\"></i>\n          <p>Quienes somos</p>\n        </div>\n      </a>\n      <a href=\"./Proximos.html\">\n        <div>\n          <i class=\"fa-regular fa-calendar\"> </i>\n          <p>Proximos conciertos</p>\n        </div>\n      </a>";
        click = 0;
      }

      updatear();
    });
  };

  var click = 0;
  updatear();
  setInterval(function () {
    logo.style.transform = "scale(2)";
    logo.style.transition = "all 1s ease-in-out";
    setTimeout(function () {
      logo.style.transform = "scale(1)";
    }, 700);
  }, 6000);
} else {}