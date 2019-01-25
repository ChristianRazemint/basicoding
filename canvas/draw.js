var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
var lines = 30;
var l = 0;
var yi, xf, xi, yf;
var nxf, nyf;

function drawLine(xinitial, yinitial, xfinal, yfinal) {
      lienzo.beginPath();
      lienzo.strokeStyle = "white";
      lienzo.moveTo(xinitial, yinitial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
}
//while (l < lines)
for(l = 0; l < lines; l++) {
    yi = 10 * (l + 1);
    xf = 10 * l;
    yf = 10 * (l + 1);
    xi = 10 * l;
    nxf = 300 - xf;
    nyf = 300 - yf;
    drawLine(0, xf, yi, 300);
    drawLine(0, xf, nxf, 0);
    drawLine(xi, 300, 300, nyf);
    drawLine(xi, 0, 300, yf);
}
/*
lienzo.moveTo(150, 0);
lienzo.lineTo(280, 280);
lienzo.moveTo(280, 280);
lienzo.lineTo(20, 280);
lienzo.moveTo(20, 280);
lienzo.lineTo(150, 0);
*/
