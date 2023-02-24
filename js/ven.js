var coll = document.getElementsByClassName("collapsible");
var i;
let des = document.getElementById("des");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    des.style.height = "10%";
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      des.style.height = "80%";

      content.style.maxHeight = "90%";
      content.style.height = "80%";
    }
  });
}
