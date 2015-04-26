
"use strict";

function k5NpFe() {

// setup environment

var MusicalComposition = document.getElementById("kosalam");
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
  Vega.moveTo(214, 170);
  Vega.lineTo(906, 170);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 185);
  Vega.lineTo(906, 185);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 200);
  Vega.lineTo(906, 200);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 215);
  Vega.lineTo(906, 215);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo(214, 230);
  Vega.lineTo(906, 230);
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

  Vega.fillText(Staff.singleBarChar, 200, 216);
  Vega.fillText(Staff.singleBarChar, 495, 216);
  Vega.fillText(Staff.doubleBarChar, 888, 216);

// lower measure bars

  Vega.fillText(Staff.singleBarChar, 200, 366);
  Vega.fillText(Staff.singleBarChar, 495, 366);
  Vega.fillText(Staff.doubleBarChar, 888, 366);

// upper time signature

  Vega.font = Staff.bellClaveStyle;
  Vega.fillStyle = Staff.bellClaveColor;

  Vega.fillText(Staff.bellClaveChar, 220, 221);

// lower time signature

  Vega.fillText(Staff.bellClaveChar, 220, 371);

// upper rests

  Vega.font = Note.restStyle;
  Vega.fillStyle = Note.restColor;

  Vega.fillText(Note.rest8Char, 685, 215);
  Vega.fillText(Note.rest8Char, 777, 215);

// lower rests

  Vega.fillText(Note.rest8Char, 352, 365);
  Vega.fillText(Note.rest8Char, 685, 365);
  Vega.fillText(Note.rest8Char, 777, 365);

// upper note beams

  Vega.lineWidth = 4;
  Vega.strokeStyle = Note.flagColor;

  Vega.beginPath();
  Vega.moveTo(552, 247);
  Vega.lineTo(640, 240);
  Vega.stroke();

// lower note beams

  Vega.beginPath();
  Vega.moveTo(552, 397);
  Vega.lineTo(640, 390);
  Vega.stroke();

// upper note flags

  Vega.font = Note.flagStyle;
  Vega.fillStyle = Note.flagColor;

  Vega.fillText(Note.downFlagChar, 729, 230);
  Vega.fillText(Note.downFlagChar, 819, 223);

// lower note flags

  Vega.fillText(Note.highFlagChar, 410, 342);
  Vega.fillText(Note.downFlagChar, 729, 380);
  Vega.fillText(Note.downFlagChar, 819, 373);

// upper note stems

  Vega.font = Note.stemStyle;
  Vega.fillStyle = Note.stemColor;

  Vega.fillText(Note.stemChar, 288, 208);
  Vega.fillText(Note.stemChar, 374, 202);
  Vega.fillText(Note.stemChar, 458, 194);
  Vega.fillText(Note.stemChar, 538, 237);
  Vega.fillText(Note.stemChar, 628, 230);
  Vega.fillText(Note.stemChar, 718, 223);
  Vega.fillText(Note.stemChar, 808, 216);

// lower note stems

  Vega.fillText(Note.stemChar, 288, 358);
  Vega.fillText(Note.stemChar, 400, 352);
  Vega.fillText(Note.stemChar, 458, 344);
  Vega.fillText(Note.stemChar, 538, 387);
  Vega.fillText(Note.stemChar, 628, 380);
  Vega.fillText(Note.stemChar, 718, 373);
  Vega.fillText(Note.stemChar, 808, 366);

// upper note heads

  Vega.font = Note.headStyle;
  Vega.fillStyle = Note.headColor;

  Vega.fillText(Note.headDark, 290, 229);
  Vega.fillText(Note.headDark, 375, 222);
  Vega.fillText(Note.headDark, 460, 214);
  Vega.fillText(Note.headDark, 550, 206);
  Vega.fillText(Note.headDark, 640, 198);
  Vega.fillText(Note.headDark, 730, 191);
  Vega.fillText(Note.headDark, 820, 184);

// lower note heads

  Vega.fillText(Note.headDark, 290, 379);
  Vega.fillText(Note.headDark, 402, 372);
  Vega.fillText(Note.headDark, 460, 364);
  Vega.fillText(Note.headDark, 550, 356);
  Vega.fillText(Note.headDark, 640, 348);
  Vega.fillText(Note.headDark, 730, 341);
  Vega.fillText(Note.headDark, 820, 334);

  Vega.font = Note.acciStyle;
  Vega.fillStyle = Note.acciColor;

  Vega.fillText(Note.sharpChar, 375, 376);

// upper sigils

  Vega.font = Sigil.stellarStyle;
  Vega.fillStyle = Sigil.stellarColor;

  Vega.fillText(Sigil.saturn  + Sigil.cancer,      275, 150);
  Vega.fillText(Sigil.sun     + Sigil.taurus,      360, 145);
  Vega.fillText(Sigil.moon    + Sigil.pisces,      445, 140);
  Vega.fillText(Sigil.mars    + Sigil.capricorn,   535, 150);
  Vega.fillText(Sigil.mercury + Sigil.sagittarius, 625, 150);
  Vega.fillText(Sigil.jupiter + Sigil.libra,       715, 150);
  Vega.fillText(Sigil.venus   + Sigil.leo,         805, 150);

// lower sigils

  Vega.fillText(Sigil.neptune + Sigil.cancer,      275, 300);
  Vega.fillText(Sigil.mars    + Sigil.aries,       380, 295);
  Vega.fillText(Sigil.mercury + Sigil.pisces,      445, 290);
  Vega.fillText(Sigil.jupiter + Sigil.capricorn,   535, 300);
  Vega.fillText(Sigil.uranus  + Sigil.sagittarius, 625, 300);
  Vega.fillText(Sigil.saturn  + Sigil.libra,       715, 300);
  Vega.fillText(Sigil.sun     + Sigil.leo,         805, 300);

}

