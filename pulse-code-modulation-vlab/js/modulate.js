function drawModulate(x){
  var c = document.getElementById("modulated");
  var ctx = c.getContext("2d");
  var w=c.width; // Canvas width => Frequency is relative to this
  var h=c.height/2; // Canvas height over two
  var bin=dec2bin()
  var fs=document.getElementById("fs").value
  var bits=document.getElementById("bits").value


  var period=w/(2*fs+(bits*fs))


  ctx.clearRect(0, 0, w, h*2);
  //draw x axis
  ctx.beginPath(); // Draw a new path
  ctx.strokeStyle = "red"; // Pick a color
  ctx.moveTo(0,h+h/2); // Where to start drawing
  ctx.lineTo(w,h+h/2); // Where to draw to
  ctx.stroke(); // Draw



  ctx.beginPath();
  ctx.strokeStyle="blue";
  var i=period*2
  ctx.moveTo(0,h+h/2)
  ctx.lineTo(i,h+h/2)
    bin.forEach((val)=>{
    [...val].forEach((bit)=>{
      if(bit=='0'){
        ctx.moveTo(i,h+h/2)
        i+=period
        ctx.lineTo(i,h+h/2)
      }
      else{
        ctx.moveTo(i,h+h/2)
        ctx.lineTo(i,h/5)
        i+=period
        ctx.lineTo(i,h/5)
        ctx.lineTo(i,h+h/2)
      }
    })
    ctx.moveTo(i,h+h/2)
    i+=2*period
    ctx.lineTo(i,h+h/2)
  })
  ctx.stroke();
}
