
function fetchDefs(y, z) {
  var s = true;
  var x = new XMLHttpRequest();
  var d = document.getElementById(z);

  if (s) {
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
        d.innerHTML = x.responseText;
      }
      else {
        try {
          if (x.status == 404)
            throw "File not found - " + y
          if (x.status == 418)
            throw "I\'m a teapot"
          if (x.status == 500)
            throw "Internal Server Error";
        }
        catch(err) {
          d.innerHTML = err;
        }
      }
    }
    x.open("GET", y, s);
    x.send();
  }
  else {
    x.open("GET", y, s);
    x.send();
    d.innerHTML = x.responseText;
  }
}

function artWork(qp) {
  fetchDefs(qp, "view_00");
}

window.onload = function() {
  fetchDefs("images\/parquet.xml", "symData");
  fetchDefs("images\/syzygy.xml", "symBase");
}

