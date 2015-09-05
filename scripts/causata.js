
"use strict";

function viewGraph(y, z) {
  var x = new XMLHttpRequest();
  var d = document.getElementById(z);
  x.onreadystatechange = function() {
    if (x.readyState == 4 && x.status == 200) {
      d.innerHTML = x.responseText;
    }
    else {
      d.innerHTML = null;
    }
  }
  x.open("GET", y, true);
  x.send();
}

document.getElementById("gstn0").addEventListener("click",
  function() {
    viewGraph("images\/guitar\/gst_n0.xml", "view_00");
  }, false);
document.getElementById("q4tn0").addEventListener("click",
  function() {
    viewGraph("images\/bass\/q4t_n0.xml", "view_00");
  }, false);
document.getElementById("q5tn0").addEventListener("click",
  function() {
    viewGraph("images\/cello\/q5t_n0.xml", "view_00");
  }, false);
document.getElementById("menu_00").addEventListener("click",
  function() {
    var nwDt = new Date();
    document.getElementById("serial").textContent = nwDt.getTime();
  }, false);

