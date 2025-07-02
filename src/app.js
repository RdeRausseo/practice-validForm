import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const FORM = document.getElementById("formExample"); 
  const card = document.getElementById("input-card");
  let error = false; 

  FORM.addEventListener('submit', event => {
    event.preventDefault(); //Detenemos el envío del formulario. 
  })

  function validateNumberCard(card){
    return card.trim()!== '' ||  card.length < 16 && card.length > 20 //Primera validación 
  }

  function validateCVC(cvc){
    return cvc.trim()!== '' || cvc.length > 4 && cvc.length < 6 //segunda validación
  }

  console.log("Hello Rigo from the console!");
  console.log("Creando repositorio para validación del formulario")
};
