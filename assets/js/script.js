var toggle = document.getElementById("nav-toggle");
var nav_list = document.getElementsByClassName("navbar__list")[0];

toggle.onclick = function() {
  toggle.classList.toggle("active");
  nav_list.classList.toggle("active");
}
