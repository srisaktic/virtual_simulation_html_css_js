

var c = document.getElementById("myCanvas"); // Grab canvas object
var ctx = c.getContext("2d"); // Define canvas context
var w=c.width; // Canvas width => Frequency is relative to this
var h=c.height/2; // Canvas height over two
var f=3; // How many cycles per canvas width


function calcSineY(x) {
	return h - h * Math.sin( x * 2 * Math.PI * (f/w) );
}

function drawSine(x){
	var c = document.getElementById("myCanvas"); // Grab canvas object
	var ctx = c.getContext("2d");

	ctx.clearRect(0, 0, w, h*2);
	//draw x axis
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(0,h);
  ctx.lineTo(w,h);
  ctx.stroke();





  // draw area below y
  ctx.beginPath();
  ctx.strokeStyle = "orange";
  for(var i=0;i<x;i++){
    if(i/3==Math.round(i/3)) {
      var y = calcSineY(i);
      ctx.moveTo(i,h);
      ctx.lineTo(i,y);
    }
  }
  ctx.stroke();

  // draw sin curve point to point until x
  ctx.beginPath();
  ctx.strokeStyle = "black";
  for(var i=0;i<x;i++){
    var y = calcSineY(i);
    ctx.lineTo(i,y);
  }
  ctx.stroke();
	console.log("sine")
}
