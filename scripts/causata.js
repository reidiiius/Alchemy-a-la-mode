
document.getElementById("gstn0").addEventListener("click",
  function() {
    artWork("images\/guitar\/gst_n0.xml");
  }, false);
document.getElementById("q4tn0").addEventListener("click",
  function() {
    artWork("images\/bass\/q4t_n0.xml");
  }, false);
document.getElementById("q5tn0").addEventListener("click",
  function() {
    artWork("images\/cello\/q5t_n0.xml");
  }, false);
document.getElementById("menu_00").addEventListener("click",
  function() {
    var nD = new Date();
    document.getElementById("serial").innerHTML = nD.getTime();
  }, false);

