function Vazao() {
    var Tempo = document.getElementById("Tempo de aferiçao").value; 
    var VL = document.getElementById("Volume").value;
  
    var VL_H = (VL );
    var VL_T = (VL_H/Tempo);
    var Flow = (VL_T.toFixed(2))/1000;
    console.log(Flow)
    var elemento = document.getElementById("Resultado");document.getElementById("M_3").innerHTML = "Vazão : " + Flow +" m3/h"; 
  }