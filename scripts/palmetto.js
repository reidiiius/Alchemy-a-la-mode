
function echiNacea(qp) {
  var d = document.getElementById("area84");
  d.innerHTML = "<use xlink:href=\'#q4_" + qp + "\'><\/use>";
}

window.onload = function() {
var xhtpr = new XMLHttpRequest();
var dgebi = document.getElementById("xprt");
  xhtpr.open("GET", "images/bass/echinacea.xml", false);
  xhtpr.send();
  dgebi.innerHTML = xhtpr.responseText;
  echiNacea("n0");
};

