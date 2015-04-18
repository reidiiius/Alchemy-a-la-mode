
"use strict";

window.onload = function() {

// setup environment

var comPosition = document.getElementById("seascape");
var vista = comPosition.getContext("2d");

var lineColor = "DarkSlateGrey";
var barColor = "DarkSeaGreen";
var meterColor = "Sienna";

var noteHeadStyle = "2em monospace";
var noteHeadColor = "SteelBlue";
var noteHeadDark = "\u25CF";

var noteStemStyle = "4em monospace";
var noteStemColor = "DarkCyan";
var noteStemChar = "\x7C";

var noteFlagStyle = "3em monospace";
var noteFlagColor = "LightSeaGreen";
var noteFlagChar = "\x2F";

var noteRestStyle = "2.5em monospace";
var noteRestColor = "CadetBlue";
var noteRestChar = "\x37";

var bellClaveStyle = "4.75em monospace";
var bellClaveColor = meterColor;
var bellClaveChar = "\xBE";

var singleBarStyle = "4em monospace";
var singleBarColor = barColor;
var singleBarChar = "\u2502";

var doubleBarStyle = "4em monospace";
var doubleBarColor = barColor;
var doubleBarChar = "\u2551";

var stellaStyle = "3em monospace";
var stellaColor = "Olive";

// demarcate canvas

  vista.beginPath();
  vista.moveTo(0, 0);
  vista.lineTo(0, 630);
  vista.lineTo(1120, 630);
  vista.lineTo(1120, 0);
  vista.closePath();
  vista.strokeStyle = "aquamarine";
  vista.stroke();

// upper staff

  vista.beginPath();
  vista.moveTo(214, 120);
  vista.lineTo(906, 120);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 135);
  vista.lineTo(906, 135);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 150);
  vista.lineTo(906, 150);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 165);
  vista.lineTo(906, 165);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 180);
  vista.lineTo(906, 180);
  vista.strokeStyle = lineColor;
  vista.stroke();

// lower staff

  vista.beginPath();
  vista.moveTo(214, 320);
  vista.lineTo(906, 320);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 335);
  vista.lineTo(906, 335);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 350);
  vista.lineTo(906, 350);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 365);
  vista.lineTo(906, 365);
  vista.strokeStyle = lineColor;
  vista.stroke();

  vista.beginPath();
  vista.moveTo(214, 380);
  vista.lineTo(906, 380);
  vista.strokeStyle = lineColor;
  vista.stroke();

// upper measure bars

  vista.font = singleBarStyle;
  vista.fillStyle = singleBarColor;
  vista.fillText(singleBarChar, 200, 166);

  vista.font = singleBarStyle;
  vista.fillStyle = singleBarColor;
  vista.fillText(singleBarChar, 495, 166);

  vista.font = doubleBarStyle;
  vista.fillStyle = doubleBarColor;
  vista.fillText(doubleBarChar, 888, 166);

// lower measure bars

  vista.font = singleBarStyle;
  vista.fillStyle = singleBarColor;
  vista.fillText(singleBarChar, 200, 366);

  vista.font = singleBarStyle;
  vista.fillStyle = singleBarColor;
  vista.fillText(singleBarChar, 495, 366);

  vista.font = doubleBarStyle;
  vista.fillStyle = doubleBarColor;
  vista.fillText(doubleBarChar, 888, 366);

// upper time signature

  vista.font = bellClaveStyle;
  vista.fillStyle = bellClaveColor;
  vista.fillText(bellClaveChar, 220, 171);

// lower time signature

  vista.font = bellClaveStyle;
  vista.fillStyle = bellClaveColor;
  vista.fillText(bellClaveChar, 220, 371);

// upper eighth Rests

  vista.font = noteRestStyle;
  vista.fillStyle = noteRestColor;
  vista.fillText(noteRestChar, 685, 165);

  vista.font = noteRestStyle;
  vista.fillStyle = noteRestColor;
  vista.fillText(noteRestChar, 777, 165);

// lower eighth Rests

  vista.font = noteRestStyle;
  vista.fillStyle = noteRestColor;
  vista.fillText(noteRestChar, 685, 365);

  vista.font = noteRestStyle;
  vista.fillStyle = noteRestColor;
  vista.fillText(noteRestChar, 777, 365);

// upper note beam

  vista.beginPath();
  vista.moveTo(552, 197);
  vista.lineTo(640, 190);
  vista.lineWidth = 4;
  vista.strokeStyle = noteFlagColor;
  vista.stroke();

// lower note beam

  vista.beginPath();
  vista.moveTo(552, 397);
  vista.lineTo(640, 390);
  vista.lineWidth = 4;
  vista.strokeStyle = noteFlagColor;
  vista.stroke();

// upper flags

  vista.font = noteFlagStyle;
  vista.fillStyle = noteFlagColor;
  vista.fillText(noteFlagChar, 729, 180);

  vista.font = noteFlagStyle;
  vista.fillStyle = noteFlagColor;
  vista.fillText(noteFlagChar, 819, 173);

// lower flags

  vista.font = noteFlagStyle;
  vista.fillStyle = noteFlagColor;
  vista.fillText(noteFlagChar, 729, 380);

  vista.font = noteFlagStyle;
  vista.fillStyle = noteFlagColor;
  vista.fillText(noteFlagChar, 819, 373);

// upper note stems

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 278, 158);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 363, 152);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 448, 144);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 538, 187);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 628, 180);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 718, 173);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 808, 166);

// lower note stems

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 278, 358);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 363, 352);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 448, 344);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 538, 387);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 628, 380);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 718, 373);

  vista.font = noteStemStyle;
  vista.fillStyle = noteStemColor;
  vista.fillText(noteStemChar, 808, 366);

// upper note heads

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 290, 179);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 375, 172);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 460, 164);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 550, 156);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 640, 148);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 730, 141);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 820, 134);

// lower note heads

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 290, 379);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 375, 372);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 460, 364);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 550, 356);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 640, 348);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 730, 341);

  vista.font = noteHeadStyle;
  vista.fillStyle = noteHeadColor;
  vista.fillText(noteHeadDark, 820, 334);

// upper sigils

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2644\u264B", 275, 85);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2609\u2649", 360, 85);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u263D\u2653", 445, 85);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2642\u2651", 535, 85);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u263F\u2650", 625, 85);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2643\u264E", 715, 85);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2640\u264C", 805, 85);

// lower sigils

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2644\u264B", 275, 288);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2609\u2649", 360, 288);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u263D\u2653", 445, 288);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2642\u2651", 535, 288);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u263F\u2650", 625, 288);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2643\u264E", 715, 288);

  vista.font = stellaStyle;
  vista.fillStyle = stellaColor;
  vista.fillText("\u2640\u264C", 805, 288);

};

