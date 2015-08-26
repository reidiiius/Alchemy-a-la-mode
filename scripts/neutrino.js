
function fetchDefs(y, z) {
  var x = new XMLHttpRequest();
     x.open("GET", y, 0);
    x.send();
  document.getElementById(z).innerHTML = x.responseText;
}

