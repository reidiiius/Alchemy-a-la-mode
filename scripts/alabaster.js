
"use strict";

window.onload = function() {

fetchDefs("images\/parquet.xml", "symData");

var gemStone = [];

var obv = Object.create(CryptoCrystalline.felsite);
var rev = Object.create(CryptoCrystalline.rhyolite);
var sgn = Object.create(CryptoCrystalline.quartzite);

var wings = [obv, rev];
var symArr = new Array(13);
var slicat = new Array(7);
var duo = new Array(13);
var axis = [10,40,70,100,130,160,190,220,250,280,310,340,370];
var u, m, h, i;

for (u = 0; u < wings.length; u++) {

  for (m = 0; m < wings[u].length; m++) {

    gemStone.push("<div id=\'" + sgn[u][m] + "\'>");
    gemStone.push("<svg width=\'420\' height=\'240\'>");

    symArr = wings[u][m];

    slicat = [
      symArr,
      symArr.slice( 7,12).concat(symArr.slice( 0, 8)),
      symArr.slice( 2,12).concat(symArr.slice( 0, 3)),
      symArr.slice( 9,12).concat(symArr.slice( 0,10)),
      symArr.slice( 4,12).concat(symArr.slice( 0, 5)),
      symArr.slice(11,12).concat(symArr.slice( 0,12)),
      symArr.slice( 6,12).concat(symArr.slice( 0, 7))
    ];

    for (h = 0; h < slicat.length; h++) {
      duo = slicat[h];
      gemStone.push("<g>");

        for (i = 0; i < duo.length; i++) {
          gemStone.push("<use y=\'" + axis[h] + "\' x=\'" +
          axis[i] + "\' xlink:href=\'#sqr_" + duo[i] + "\'><\/use>");
        }
      gemStone.push("<\/g>");
    }
    gemStone.push("<\/svg>");
    gemStone.push("<\/div>");
  }
}

  var areaFortyTwo = document.getElementById("area42");
  areaFortyTwo.insertAdjacentHTML("afterbegin", gemStone.join("\n"));

};

