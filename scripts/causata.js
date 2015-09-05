
"use strict";

document.getElementById("gstn0").addEventListener("click",
  function() {
    fetchDefs("images\/guitar\/gst_n0.xml", "view_00");
  }, false);
document.getElementById("q4tn0").addEventListener("click",
  function() {
    fetchDefs("images\/bass\/q4t_n0.xml", "view_00");
  }, false);
document.getElementById("q5tn0").addEventListener("click",
  function() {
    fetchDefs("images\/cello\/q5t_n0.xml", "view_00");
  }, false);
document.getElementById("menu_00").addEventListener("click",
  function() {
    var nwDt = new Date();
    document.getElementById("serial").innerHTML = nwDt.getTime();
  }, false);

