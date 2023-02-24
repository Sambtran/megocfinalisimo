"use strict";

var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var body = document.getElementsByTagName("body")[0];

if (screen.width > 768) {
  uno.addEventListener("mouseenter", function (ev) {
    body.style = "  display: grid; grid-template-columns: 4fr 1fr 1fr;";
  });
  dos.addEventListener("mouseenter", function (ev) {
    body.style = "  display: grid; grid-template-columns: 1fr 4fr 1fr;";
  });
  tres.addEventListener("mouseenter", function (ev) {
    body.style = "  display: grid; grid-template-columns: 1fr 1fr 4fr;";
  });
} else {// let cont = 0
  // setInterval(()=>{
  //     cont++
  //     console.log(cont);
  //     if(cont==1){
  //     body.style="display: grid; grid-template-rows: 2fr 1fr 1fr; transition: all 1s ease;"}
  //     uno.style.height="100%"
  //     if(cont==2){
  //     body.style="    display: grid; grid-template-rows: 1fr 2fr 1fr; transition: all 1s ease;"
  //     dos.style.height="100%"  }
  //     if(cont==3){
  //         body.style=" display: grid; grid-template-rows: 1fr 1fr 2fr; transition: all 1s ease;"
  //         tres.style.height="100vh"
  //         cont = 0
  //     }
  // },3000)
}