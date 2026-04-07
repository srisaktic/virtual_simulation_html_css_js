function bin2dec(){
  bin=dec2bin()
  dec=[]
  bin.forEach((val,i)=>{
    dec.push(parseInt(val,2))
  })
return dec
}
console.log(bin2dec())

function drawDemodulate(x){
  var c = document.getElementById("message-d"); // Grab canvas object
	var ctx = c.getContext("2d");
  var sPeriod=calcPeriod()
  var stepSize=calcSteps(x)

  dec=bin2dec()
  vmax=Math.max(...dec)
  ctx.clearRect(0, 0, w, h*2);
	//draw x axis
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(0,h);
  ctx.lineTo(w,h);
  ctx.stroke();


  // draw area below y
  ctx.beginPath();
  ctx.strokeStyle = "red";
  var j=0
  for(var i=0;i<x;i+=sPeriod){
    var y=(h+(vmax/2)*stepSize)-dec[j]*stepSize;

    ctx.lineTo(i,y);
    j+=1
  }
  ctx.stroke();

}
