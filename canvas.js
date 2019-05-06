var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// //Rectangle
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 75);

// //Draw Line
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// //Draw Circle
// ctx.beginPath();
// ctx.arc(100, 50, 40, 0,Math.PI*2);
// ctx.stroke();

// Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// var grd = ctx.createRadialGradient(75, 50,5,90,60,100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);

ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
