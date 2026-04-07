
var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");
var w=c.width; // Canvas width => Frequency is relative to this
var h=c.height/2; // Canvas height over two
var f=3; // How many cycles per canvas width





function calcPeriod(){
  var fs=document.getElementById("fs").value
  var sPeriod=(w/f)/fs
  return sPeriod
}

function drawSample(x){

  var sPeriod=calcPeriod()
  ctx.clearRect(0, 0, w, h*2);
  //draw x axis
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(0,h);
  ctx.lineTo(w,h);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "darkgreen";
  for(var i=0;i<x;i+=sPeriod){

      var y = calcSineY(i);
      ctx.moveTo(i,h);
      ctx.lineTo(i,y);

  }
  ctx.stroke();

}
