
"use strict";

function echiNacea(qp) {
  var d = document.getElementById("area84");
  d.innerHTML = "<use xlink:href=\'#q4_" + qp + "\'><\/use>";
}

window.onload = function() {

fetchDefs("images\/parquet.xml", "symData");

var gemStone = [];

var obv = Object.create(CryptoCrystalline.felsite);
var rev = Object.create(CryptoCrystalline.rhyolite);
var sgn = Object.create(CryptoCrystalline.quartzite);

gemStone.push("<svg xmlns=\'http:\/\/www.w3.org\/2000\/symbol\' \
xmlns:xlink=\'http:\/\/www.w3.org\/1999\/xlink\'>");
gemStone.push("<defs>");

var wings = [obv, rev];

for (var u = 0; u < wings.length; u++) {

  for (var m = 0; m < wings[u].length; m++) {

    gemStone.push("<symbol id=\'q4_" + sgn[u][m] + "\'>");

    var symArr = wings[u][m];

    var slicat = [
      symArr,
      symArr.slice( 7,12).concat(symArr.slice( 0, 8)),
      symArr.slice( 2,12).concat(symArr.slice( 0, 3)),
      symArr.slice( 9,12).concat(symArr.slice( 0,10)),
      symArr.slice( 4,12).concat(symArr.slice( 0, 5)),
      symArr.slice(11,12).concat(symArr.slice( 0,12)),
      symArr.slice( 6,12).concat(symArr.slice( 0, 7))
    ];

    for (var h = 0; h < slicat.length; h++) {
      var duo = slicat[h];
      var axis = [10,40,70,100,130,160,190,220,250,280,310,340,370];
      gemStone.push("<g>");

        for (var i = 0; i < duo.length; i++) {
          gemStone.push("<use y=\'" + axis[h] + "\' x=\'" +
          axis[i] + "\' xlink:href=\'#sqr_" + duo[i] + "\'><\/use>");
        }
      gemStone.push("<\/g>");
    }
    gemStone.push("<\/symbol>");
  }
}
gemStone.push("<\/defs>");
gemStone.push("<\/svg>");

document.getElementById("area42").insertAdjacentHTML("afterbegin", gemStone.join("\n"));

  echiNacea("n0");
};

