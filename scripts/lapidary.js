
"use strict";

window.onload = function() {

// setup environment

var MusicalComposition = document.getElementById("seascape")
var Vista = MusicalComposition.getContext("2d");

var Staff = {

  lineColor      : "DarkSlateGrey",

  bellClaveStyle : "4.75em monospace",
  bellClaveColor : "Sienna",
  bellClaveChar  : "\xBE",

  singleBarStyle : "4em monospace",
  singleBarColor : "DarkSeaGreen",
  singleBarChar  : "\u2502",

  doubleBarStyle : "4em monospace",
  doubleBarColor : "DarkSeaGreen",
  doubleBarChar  : "\u2551"

};

var Note = {

  headStyle    : "2em monospace",
  headColor    : "SteelBlue",
  headDark     : "\u25CF",

  stemStyle    : "4em monospace",
  stemColor    : "DarkCyan",
  stemChar     : "\x7C",

  flagStyle    : "3em monospace",
  flagColor    : "LightSeaGreen",
  highFlagChar : "\x5C",
  downFlagChar : "\x2F",

  restStyle    : "2.5em monospace",
  restColor    : "CadetBlue",
  restChar     : "\x37",

  acciStyle    : "2.5em monospace",
  acciColor    : "DarkGoldenrod",
  flatChar     : "\x62",
  sharpChar    : "\x23"

};

var Sigil = {

  stellarStyle : "3em monospace",
  stellarColor : "Olive",

  juno    : "\u26B5",
  vesta   : "\u26B6",
  sun     : "\u2609",
  moon    : "\u263D",
  mercury : "\u263F",
  venus   : "\u2640",
  mars    : "\u2642",
  jupiter : "\u2643",
  saturn  : "\u2644",
  uranus  : "\u2645",
  neptune : "\u2646",
  pluto   : "\u2647",

  aries       : "\u2648",
  taurus      : "\u2649",
  gemini      : "\u264A",
  cancer      : "\u264B",
  leo         : "\u264C",
  virgo       : "\u264D",
  libra       : "\u264E",
  scorpio     : "\u264F",
  sagittarius : "\u2650",
  capricorn   : "\u2651",
  aquarius    : "\u2652",
  pisces      : "\u2653"

};

// demarcate canvas

  Vista.beginPath();
  Vista.moveTo(0, 0);
  Vista.lineTo(0, 630);
  Vista.lineTo(1120, 630);
  Vista.lineTo(1120, 0);
  Vista.closePath();
  Vista.strokeStyle = "Aquamarine";
  Vista.stroke();

// upper staff

  Vista.beginPath();
  Vista.moveTo(214, 120);
  Vista.lineTo(906, 120);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 135);
  Vista.lineTo(906, 135);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 150);
  Vista.lineTo(906, 150);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 165);
  Vista.lineTo(906, 165);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 180);
  Vista.lineTo(906, 180);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

// lower staff

  Vista.beginPath();
  Vista.moveTo(214, 320);
  Vista.lineTo(906, 320);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 335);
  Vista.lineTo(906, 335);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 350);
  Vista.lineTo(906, 350);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 365);
  Vista.lineTo(906, 365);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

  Vista.beginPath();
  Vista.moveTo(214, 380);
  Vista.lineTo(906, 380);
  Vista.strokeStyle = Staff.lineColor;
  Vista.stroke();

// upper measure bars

  Vista.font = Staff.singleBarStyle;
  Vista.fillStyle = Staff.singleBarColor;
  Vista.fillText(Staff.singleBarChar, 200, 166);

  Vista.font = Staff.singleBarStyle;
  Vista.fillStyle = Staff.singleBarColor;
  Vista.fillText(Staff.singleBarChar, 495, 166);

  Vista.font = Staff.doubleBarStyle;
  Vista.fillStyle = Staff.doubleBarColor;
  Vista.fillText(Staff.doubleBarChar, 888, 166);

// lower measure bars

  Vista.font = Staff.singleBarStyle;
  Vista.fillStyle = Staff.singleBarColor;
  Vista.fillText(Staff.singleBarChar, 200, 366);

  Vista.font = Staff.singleBarStyle;
  Vista.fillStyle = Staff.singleBarColor;
  Vista.fillText(Staff.singleBarChar, 495, 366);

  Vista.font = Staff.doubleBarStyle;
  Vista.fillStyle = Staff.doubleBarColor;
  Vista.fillText(Staff.doubleBarChar, 888, 366);

// upper time signature

  Vista.font = Staff.bellClaveStyle;
  Vista.fillStyle = Staff.bellClaveColor;
  Vista.fillText(Staff.bellClaveChar, 220, 171);

// lower time signature

  Vista.font = Staff.bellClaveStyle;
  Vista.fillStyle = Staff.bellClaveColor;
  Vista.fillText(Staff.bellClaveChar, 220, 371);

// upper eighth rests

  Vista.font = Note.restStyle;
  Vista.fillStyle = Note.restColor;
  Vista.fillText(Note.restChar, 685, 165);

  Vista.font = Note.restStyle;
  Vista.fillStyle = Note.restColor;
  Vista.fillText(Note.restChar, 777, 165);

// lower eighth rests

  Vista.font = Note.restStyle;
  Vista.fillStyle = Note.restColor;
  Vista.fillText(Note.restChar, 355, 365);

  Vista.font = Note.restStyle;
  Vista.fillStyle = Note.restColor;
  Vista.fillText(Note.restChar, 685, 365);

  Vista.font = Note.restStyle;
  Vista.fillStyle = Note.restColor;
  Vista.fillText(Note.restChar, 777, 365);

// upper note beams

  Vista.beginPath();
  Vista.moveTo(552, 197);
  Vista.lineTo(640, 190);
  Vista.lineWidth = 4;
  Vista.strokeStyle = Note.flagColor;
  Vista.stroke();

// lower note beams

  Vista.beginPath();
  Vista.moveTo(552, 397);
  Vista.lineTo(640, 390);
  Vista.lineWidth = 4;
  Vista.strokeStyle = Note.flagColor;
  Vista.stroke();

// upper note flags

  Vista.font = Note.flagStyle;
  Vista.fillStyle = Note.flagColor;
  Vista.fillText(Note.downFlagChar, 729, 180);

  Vista.font = Note.flagStyle;
  Vista.fillStyle = Note.flagColor;
  Vista.fillText(Note.downFlagChar, 819, 173);

// lower note flags

  Vista.font = Note.flagStyle;
  Vista.fillStyle = Note.flagColor;
  Vista.fillText(Note.highFlagChar, 400, 342);

  Vista.font = Note.flagStyle;
  Vista.fillStyle = Note.flagColor;
  Vista.fillText(Note.downFlagChar, 729, 380);

  Vista.font = Note.flagStyle;
  Vista.fillStyle = Note.flagColor;
  Vista.fillText(Note.downFlagChar, 819, 373);

// upper note stems

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 278, 158);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 363, 152);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 448, 144);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 538, 187);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 628, 180);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 718, 173);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 808, 166);

// lower note stems

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 278, 358);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 390, 352);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 448, 344);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 538, 387);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 628, 380);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 718, 373);

  Vista.font = Note.stemStyle;
  Vista.fillStyle = Note.stemColor;
  Vista.fillText(Note.stemChar, 808, 366);

// upper note heads

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 290, 179);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 375, 172);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 460, 164);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 550, 156);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 640, 148);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 730, 141);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 820, 134);

// lower note heads

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 290, 379);

  Vista.font = Note.acciStyle;
  Vista.fillStyle = Note.acciColor;
  Vista.fillText(Note.sharpChar, 375, 376);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 402, 372);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 460, 364);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 550, 356);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 640, 348);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 730, 341);

  Vista.font = Note.headStyle;
  Vista.fillStyle = Note.headColor;
  Vista.fillText(Note.headDark, 820, 334);

// upper sigils

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.saturn + Sigil.cancer, 275, 85);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.sun + Sigil.taurus, 360, 85);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.moon + Sigil.pisces, 445, 85);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.mars + Sigil.capricorn, 535, 85);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.mercury + Sigil.sagittarius, 625, 85);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.jupiter + Sigil.libra, 715, 85);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.venus + Sigil.leo, 805, 85);

// lower sigils

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.neptune + Sigil.cancer, 275, 288);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.mars + Sigil.aries, 380, 288);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.mercury + Sigil.pisces, 445, 288);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.jupiter + Sigil.capricorn, 535, 288);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.uranus + Sigil.sagittarius, 625, 288);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.saturn + Sigil.libra, 715, 288);

  Vista.font = Sigil.stellarStyle;
  Vista.fillStyle = Sigil.stellarColor;
  Vista.fillText(Sigil.sun + Sigil.leo, 805, 288);

};

