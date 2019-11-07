var toggle = document.getElementById("nav-toggle");

toggle.onclick = function() {
  var nav_list = document.getElementsByClassName("navbar__small--list")[0];
  nav_list.classList.toggle("active");

}

function nav_toggle() {
  var nav_list = document.getElementsByClassName("navbar__small--list");
  console.log("click");
}
