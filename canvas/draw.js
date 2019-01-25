var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
/*
lienzo.beginPath();
lienzo.strokeStyle = "blue"; //this could be in RGB
lienzo.moveTo(150, 0);
lienzo.lineTo(280, 280);
lienzo.moveTo(280, 280);
lienzo.lineTo(20, 280);
lienzo.moveTo(20, 280);
lienzo.lineTo(150, 0);
lienzo.stroke();
lienzo.ClosePath();
*/
function drawLine(xinitial, yinitial, xfinal, yfinal) {
      lienzo.beginPath();
      lienzo.strokeStyle = "black";
      lienzo.moveTo(xinitial, yinitial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
}

drawLine(150, 0, 280, 280);

drawLine(280, 280, 20, 280);

drawLine(20, 280, 150, 0);
