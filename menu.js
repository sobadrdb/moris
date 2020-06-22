function menuToggler() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " mobile";
  } else {
    x.className = "navbar";
  }
}