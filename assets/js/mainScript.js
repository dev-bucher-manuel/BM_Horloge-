//Ciblage des classes : secondes, minutes et heures

var secondDiv = document.querySelector('.second-hand');
var minDiv = document.querySelector('.min-hand');
var hourDiv = document.querySelector('.hour-hand');

function setDate(){ //La méthode setDate() définit le jour du mois (relatif au début du mois courant) pour une date donnée.
  
  var now = new Date(); //fonction qui donne la date d'aujourd'hui
  var seconds = now.getSeconds();//on récupère les secondes de la fonction "now"
  var secDeg = ((seconds/60)* 360 + 90);//secondes par rapport au degré (le degré pour chaque seconde)
  secondDiv.style.transform = `rotate(${secDeg}deg)`;//permet de faire la rotation de la div par rapport au calcul ci-dessus

  var mins = now.getMinutes();
  var minDeg = ((mins/60) * 360) + ((seconds/60)*6) + 90; // ce calcul permet de savoir où en sont les secondes dans la minute 360/60 = 6 
  minDiv.style.transform = `rotate(${minDeg}deg)` ;//permet de faire la rotation de la div par rapport au calcul ci-dessus

  var hour = now.getHours();
  var hourDeg = ((hour/12)*360) + ((mins/60)*30) + 90 ; 
  hourDiv.style.transform = `rotate(${hourDeg}deg)`;//permet de faire la rotation de la div par rapport au calcul ci-dessus


  }

setInterval(setDate,1000); //La méthode setInterval () appelle une fonction ou évalue une expression à des intervalles spécifiés (en millisecondes donc 1000ms=1s).

