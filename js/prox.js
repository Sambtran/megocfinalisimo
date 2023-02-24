let cartel = document.getElementById("cart2");
let i = 1;
let fecha = document.getElementsByTagName("h2")[0];

setInterval(() => {
  i++;
  if (i == 4) {
    i = 1;
  }
  cartel.setAttribute("src", "../img/cartel" + i + ".jpg");
}, 2000);
setInterval(() => {
  fecha.style.transform = "scale(2)";
  fecha.style.transition = "all 1s ease-in-out";
  setTimeout(() => {
    fecha.style.transform = "scale(1)";
  }, 1000);
}, 8000);
