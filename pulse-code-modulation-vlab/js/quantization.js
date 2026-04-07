
var c2 = document.getElementById("canvas3");
var ctx2 = c2.getContext("2d");
var w=c2.width; // Canvas width => Frequency is relative to this
var h=c2.height/2; // Canvas height over two
var f=3;


function calcPeriod(){
  var fs=document.getElementById("fs").value
  var sPeriod=(w/f)/fs
  return sPeriod
}

function calcSample(x){
    var sampled=[]
    var sPeriod=calcPeriod()
    for(var i=0;i<x;i+=sPeriod){

        var y = calcSineY(i);
        sampled.push(Math.floor(y-h))
      }
      return sampled
}

function calcSteps(x){

  var stepSize
  let bits=document.getElementById("bits").value
  let L=2**bits
  var sampled=calcSample(x)
  const Vmin=Math.min(...sampled)
  const Vmax=Math.max(...sampled)

  stepSize=(Vmax-Vmin)/L
  return stepSize

}

function calcQuantized(x){
  var quantized=[]
  var sampled=calcSample(x)
  var stepSize=calcSteps(x)
  sampled.forEach((val,i)=>{
    quantized.push(Math.floor(val/stepSize))
  })
  return quantized
}


function drawQuantized(x){
  var c2 = document.getElementById("canvas3");
  var ctx2 = c2.getContext("2d");
  var sPeriod=calcPeriod()
  var stepSize=calcSteps(x)
  var quantized=calcQuantized(x)
  ctx2.clearRect(0, 0, w, h*2);
  //draw x axis
  ctx2.beginPath(); // Draw a new path
  ctx2.strokeStyle = "red"; // Pick a color
  ctx2.moveTo(0,h); // Where to start drawing
  ctx2.lineTo(w,h); // Where to draw to
  ctx2.stroke(); // Draw

  ctx2.beginPath(); // Draw a new path
  ctx2.strokeStyle = "blue"; // Pick a color
  var j=0
  for(var i=0;i<x;i+=sPeriod){ // Loop from left side to current x
      var y =h+quantized[j]*stepSize // Calculate y value from x
      ctx2.moveTo(i,h); // Where to start drawing
      ctx2.lineTo(i,y); // Where to draw to
      j+=1


  }
  ctx2.stroke(); // Draw

//console.log(quantized)
}


function dec2bin(){
  var bits=document.getElementById("bits").value
   var base10=[]
   var quantized=calcQuantized(w)
   var minQ=Math.max(...quantized)

   quantized.forEach((val,i)=>{
      base10.push(-val+minQ)
    })

    var base2=[]

    base10.forEach((val,i)=>{
        var bin=val.toString(2)
        if(bin.length==bits){
          base2.push(bin)

        }
        else if(bin.length>bits){
          base2.push("1".repeat(bits))
        }
        else{
          base2.push(("0".repeat(bits-bin.length))+bin)
        }
      })
      return base2

}

function bitStream(){
  var stream=dec2bin()
  document.getElementById("bitStream").innerHTML=stream
  document.getElementById("bitStream2").innerHTML=stream
}
console.log(dec2bin())
