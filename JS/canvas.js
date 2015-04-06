var my_canvas = document.getElementById("canvas");
var context = my_canvas.getContext("2d");

context.fillStyle = "yellow";
context.beginPath();
context.arc(90,50,50,.4*Math.PI,.05*Math.PI);
context.fill();
context.fillStyle = "white";
context.beginPath();
context.arc(100,60,40,0,2*Math.PI);
context.fill();

context.fillStyle = "grey";
context.fillRect(160,130,40,70);

context.font = "30px Garamond";
context.fillText("Missing Cat",10,30);