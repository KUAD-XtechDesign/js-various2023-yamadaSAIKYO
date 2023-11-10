
$(".uta1 .uta2 .uta3 .uta4 .uta5 .uta6 .uta7 .uta8 .uta9 .uta10").addClass("syu");

var text = document.getElementById("syu"); 
var animation = text.animate([ 
  { transform: "translateY(-10px)", opacity: 0 }, 
  { transform: "translateY(0px)", opacity: 1 } 
], {
  duration: 500, 
  delay: 100, 
  iterations: 1 
});