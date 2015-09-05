
"use strict";

function fetchDefs(y, z) {
  var s = true;
  var x = new XMLHttpRequest();
  var d = document.getElementById(z);

  if (s) {
    x.onreadystatechange = function() {
      if (x.readyState == 4 && x.status == 200) {
        d.insertAdjacentHTML("afterbegin", x.responseText);
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
          d.textContent = err;
        }
      }
    }
    x.open("GET", y, s);
    x.send();
  }
  else {
    x.open("GET", y, s);
    x.send();
    d.insertAdjacentHTML("afterbegin", x.responseText);
  }
}

function syzygyParquet() {
  fetchDefs("images\/parquet.xml", "symData");
  fetchDefs("images\/syzygy.xml", "symBase");
}

