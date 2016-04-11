
"use strict";

function k5NpFe() {

// environment

var MusicalComposition = document.getElementById("kosalam");
var Vega = MusicalComposition.getContext("2d");

var Staff = Object.create(Tranquility_Base.Arrangment);
var Note  = Object.create(Tranquility_Base.Orchestration);
var Sigil = Object.create(Tranquility_Base.Constellation);

// demarcate

  Vega.beginPath();
  Vega.moveTo(  0,   0);
  Vega.lineTo(  0, 165);
  Vega.lineTo(720, 165);
  Vega.lineTo(720,   0);
  Vega.closePath();
  Vega.lineWidth = 2;
  Vega.strokeStyle = "Wheat";
  Vega.stroke();

// staff

  Vega.lineWidth = 1;
  Vega.strokeStyle = Staff.lineColor;

  Vega.beginPath();
  Vega.moveTo( 20,  70);
  Vega.lineTo(700,  70);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo( 20,  85);
  Vega.lineTo(700,  85);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo( 20, 100);
  Vega.lineTo(700, 100);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo( 20, 115);
  Vega.lineTo(700, 115);
  Vega.stroke();

  Vega.beginPath();
  Vega.moveTo( 20, 130);
  Vega.lineTo(700, 130);
  Vega.stroke();

// bars

  Vega.font = Staff.singleBarStyle;
  Vega.fillStyle = Staff.singleBarColor;

  Vega.fillText(Staff.singleBarChar,   7, 116);
  Vega.fillText(Staff.singleBarChar, 300, 116);
  Vega.fillText(Staff.doubleBarChar, 680, 116);

// meter

  Vega.font = Staff.bellClaveStyle;
  Vega.fillStyle = Staff.bellClaveColor;

  Vega.fillText(Staff.bellClaveChar,  28, 121);

// rests

  Vega.font = Note.restStyle;
  Vega.fillStyle = Note.restColor;

  Vega.fillText(Note.rest8Char, 152, 115);
  Vega.fillText(Note.rest8Char, 485, 115);
  Vega.fillText(Note.rest8Char, 577, 115);

// beams

  Vega.lineWidth = 4;
  Vega.strokeStyle = Note.flagColor;

  Vega.beginPath();
  Vega.moveTo(352, 147);
  Vega.lineTo(440, 140);
  Vega.stroke();

// flags

  Vega.font = Note.flagStyle;
  Vega.fillStyle = Note.flagColor;

  Vega.fillText(Note.highFlagChar, 210,  92);
  Vega.fillText(Note.downFlagChar, 529, 130);
  Vega.fillText(Note.downFlagChar, 619, 123);

// stems

  Vega.font = Note.stemStyle;
  Vega.fillStyle = Note.stemColor;

  Vega.fillText(Note.stemChar,  88, 108);
  Vega.fillText(Note.stemChar, 200, 102);
  Vega.fillText(Note.stemChar, 258,  94);
  Vega.fillText(Note.stemChar, 338, 137);
  Vega.fillText(Note.stemChar, 428, 130);
  Vega.fillText(Note.stemChar, 518, 123);
  Vega.fillText(Note.stemChar, 608, 115);

// heads

  Vega.font = Note.headStyle;
  Vega.fillStyle = Note.headColor;

  Vega.fillText(Note.headDark,  90, 129);
  Vega.fillText(Note.headDark, 202, 122);
  Vega.fillText(Note.headDark, 260, 114);
  Vega.fillText(Note.headDark, 350, 106);
  Vega.fillText(Note.headDark, 440,  98);
  Vega.fillText(Note.headDark, 530,  91);
  Vega.fillText(Note.headDark, 620,  83);

// accidentals

  Vega.font = Note.acciStyle;
  Vega.fillStyle = Note.acciColor;

  Vega.fillText(Note.sharpChar, 175, 126);

// sigils

  Vega.font = Sigil.stellarStyle;
  Vega.fillStyle = Sigil.stellarColor;

  Vega.fillText(Sigil.neptune + Sigil.cancer,       75,  50);
  Vega.fillText(Sigil.mars    + Sigil.aries,       180,  45);
  Vega.fillText(Sigil.mercury + Sigil.pisces,      245,  40);
  Vega.fillText(Sigil.jupiter + Sigil.capricorn,   335,  50);
  Vega.fillText(Sigil.uranus  + Sigil.sagittarius, 425,  50);
  Vega.fillText(Sigil.saturn  + Sigil.libra,       515,  50);
  Vega.fillText(Sigil.sun     + Sigil.leo,         605,  50);

}

