document.getElementById("demodulation-screen").style.display="none";
quantize()

function start(){
  	drawSine(w);
    drawSample(w);
    drawQuantized(w);
    bitStream();


}

function quantize(){

    document.getElementById('modulate').style="background-color: #000;color: #fff;"
    document.getElementById('demodulate').style=""
    document.getElementById("demodulation-screen").style.display="none";
    document.getElementById("modulation-screen").style.display="block";
}
function modulate(){
//   bitStream();
  document.getElementById('demodulate').style="background-color: #000;color: #fff;"
   document.getElementById('modulate').style=""
   document.getElementById("modulation-screen").style.display="none"
   document.getElementById("demodulation-screen").style.display="block";
   drawDemodulate(w);
   drawModulate(w/3)


}
