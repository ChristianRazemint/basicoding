var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");

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
