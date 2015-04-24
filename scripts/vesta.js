
"use strict";

function j5TiFe() {

// setup environment

var MusicalComposition = document.getElementById("gamanasrama");
var Vega = MusicalComposition.getContext("2d");

var Staff = Object.create(Tranquility_Base.Arrangment);
var Note  = Object.create(Tranquility_Base.Orchestration);
var Sigil = Object.create(Tranquility_Base.Constellation);

// demarcate canvas

  Vega.beginPath();
  Vega.moveTo(0, 0);
  Vega.lineTo(0, 630);
  Vega.lineTo(1120, 630);
  Vega.lineTo(1120, 0);
  Vega.closePath();
  Vega.lineWidth = 2;
  Vega.strokeStyle = "Wheat";
  Vega.stroke();

// upper staff

  Vega.lineWidth = 1;
  Vega.strokeStyle = Staff.lineColor;

  Vega.beginPath();
  Vega.moveTo(214, 120);
  Vega.lineTo(906, 120);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 135);
  Vega.lineTo(906, 135);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 150);
  Vega.lineTo(906, 150);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 165);
  Vega.lineTo(906, 165);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 180);
  Vega.lineTo(906, 180);
  Vega.stroke();

// lower staff

  Vega.beginPath();
  Vega.moveTo(214, 320);
  Vega.lineTo(906, 320);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 335);
  Vega.lineTo(906, 335);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 350);
  Vega.lineTo(906, 350);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 365);
  Vega.lineTo(906, 365);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 380);
  Vega.lineTo(906, 380);
  Vega.stroke();

// upper measure bars

  Vega.font = Staff.singleBarStyle;
  Vega.fillStyle = Staff.singleBarColor;

  Vega.fillText(Staff.singleBarChar, 200, 166);
  Vega.fillText(Staff.singleBarChar, 495, 166);
  Vega.fillText(Staff.doubleBarChar, 888, 166);

// lower measure bars

  Vega.fillText(Staff.singleBarChar, 200, 366);
  Vega.fillText(Staff.singleBarChar, 495, 366);
  Vega.fillText(Staff.doubleBarChar, 888, 366);

// upper time signature

  Vega.font = Staff.bellClaveStyle;
  Vega.fillStyle = Staff.bellClaveColor;

  Vega.fillText(Staff.bellClaveChar, 220, 171);

// lower time signature

  Vega.fillText(Staff.bellClaveChar, 220, 371);

// upper rests

  Vega.font = Note.restStyle;
  Vega.fillStyle = Note.restColor;

  Vega.fillText(Note.rest8Char, 685, 165);
  Vega.fillText(Note.rest8Char, 777, 165);

// lower rests

  Vega.fillText(Note.rest4Char, 410, 362);
  Vega.fillText(Note.rest8Char, 685, 365);
  Vega.fillText(Note.rest8Char, 777, 365);

// upper note beams

  Vega.lineWidth = 4;
  Vega.strokeStyle = Note.flagColor;

  Vega.beginPath();
  Vega.moveTo(552, 197);
  Vega.lineTo(640, 190);
  Vega.stroke();

// lower note beams

  Vega.beginPath();
  Vega.moveTo(290, 322);
  Vega.lineTo(374, 318);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(552, 397);
  Vega.lineTo(640, 390);
  Vega.stroke();

// upper note flags

  Vega.font = Note.flagStyle;
  Vega.fillStyle = Note.flagColor;

  Vega.fillText(Note.downFlagChar, 729, 180);
  Vega.fillText(Note.downFlagChar, 819, 173);

// lower note flags

  Vega.fillText(Note.downFlagChar, 729, 380);
  Vega.fillText(Note.downFlagChar, 819, 373);

// upper note stems

  Vega.font = Note.stemStyle;
  Vega.fillStyle = Note.stemColor;

  Vega.fillText(Note.stemChar, 278, 158);
  Vega.fillText(Note.stemChar, 363, 152);
  Vega.fillText(Note.stemChar, 448, 144);
  Vega.fillText(Note.stemChar, 538, 187);
  Vega.fillText(Note.stemChar, 628, 180);
  Vega.fillText(Note.stemChar, 718, 173);
  Vega.fillText(Note.stemChar, 808, 166);

// lower note stems

  Vega.fillText(Note.stemChar, 278, 358);
  Vega.fillText(Note.stemChar, 358, 352);
  Vega.fillText(Note.stemChar, 448, 344);
  Vega.fillText(Note.stemChar, 538, 387);
  Vega.fillText(Note.stemChar, 628, 380);
  Vega.fillText(Note.stemChar, 718, 373);
  Vega.fillText(Note.stemChar, 808, 366);

// upper note heads

  Vega.font = Note.headStyle;
  Vega.fillStyle = Note.headColor;

  Vega.fillText(Note.headDark, 290, 179);
  Vega.fillText(Note.headDark, 375, 172);
  Vega.fillText(Note.headDark, 460, 164);
  Vega.fillText(Note.headDark, 550, 156);
  Vega.fillText(Note.headDark, 640, 148);
  Vega.fillText(Note.headDark, 730, 141);
  Vega.fillText(Note.headDark, 820, 134);

// lower note heads

  Vega.fillText(Note.headDark, 290, 379);
  Vega.fillText(Note.headDark, 370, 372);
  Vega.fillText(Note.headDark, 460, 364);
  Vega.fillText(Note.headDark, 550, 356);
  Vega.fillText(Note.headDark, 640, 348);
  Vega.fillText(Note.headDark, 730, 341);
  Vega.fillText(Note.headDark, 820, 334);

  Vega.font = Note.acciStyle;
  Vega.fillStyle = Note.acciColor;

  Vega.fillText(Note.flatChar, 345, 372);

// upper sigils

  Vega.font = Sigil.stellarStyle;
  Vega.fillStyle = Sigil.stellarColor;

  Vega.fillText(Sigil.saturn  + Sigil.cancer,      275,  85);
  Vega.fillText(Sigil.sun     + Sigil.taurus,      360,  85);
  Vega.fillText(Sigil.moon    + Sigil.pisces,      445,  85);
  Vega.fillText(Sigil.mars    + Sigil.capricorn,   535,  85);
  Vega.fillText(Sigil.mercury + Sigil.sagittarius, 625,  85);
  Vega.fillText(Sigil.jupiter + Sigil.libra,       715,  85);
  Vega.fillText(Sigil.venus   + Sigil.leo,         805,  85);

// lower sigils

  Vega.fillText(Sigil.vesta   + Sigil.cancer,      275, 288);
  Vega.fillText(Sigil.mars    + Sigil.gemini,      348, 288);
  Vega.fillText(Sigil.jupiter + Sigil.pisces,      445, 288);
  Vega.fillText(Sigil.venus   + Sigil.capricorn,   535, 288);
  Vega.fillText(Sigil.saturn  + Sigil.sagittarius, 625, 288);
  Vega.fillText(Sigil.sun     + Sigil.libra,       715, 288);
  Vega.fillText(Sigil.moon    + Sigil.leo,         805, 288);

}

