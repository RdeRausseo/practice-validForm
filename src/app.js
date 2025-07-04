import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const FORM = document.getElementById("formExample");
  const card = document.getElementById("input-Card");
  const cvc = document.getElementById("input-cvc");
  const amount = document.getElementById("input-amount");
  const name = document.getElementById("input-name");
  const lastName = document.getElementById("input-Lastname");
  const city = document.getElementById("input-city");
  const state = document.getElementById("pick-state");
  const errorMessage = document.getElementById("errors");

  FORM.addEventListener("submit", (event) => {
    event.preventDefault(); //Detenemos el envío del formulario.
    let errors = validateForm();
    if (errors.length > 0) {
      errorMessage.innerHTML = errors.map(error => `#${error}`).join("<br>"); 
      errorMessage.classList.add("alert", "alert-danger");
      errorMessage.style.display = "block";
    } else {
      alert("Formulario enviado con exito");
    }
  });

  function validateForm() {
    const errors = [];

    if (!validateNumberCard(card.value)) {
      errors.push(
        "El numero de tarjeta no debe estar vacío, no debe tener menos de 16 caracteres y no debe tener mas de 20 caracteres"
      );
    }

    if (!validateCVC(cvc.value)) {
      errors.push(
        "El numero de seguridad o el cvc no debe estar vacío, no debe tener menos de 4 caracteres y no debe tener mas de 6 caracteres"
      );
    }

    if (!validateAmount(amount.value)) {
      errors.push("El monto no debe estar vacío");
    }

    if (!validateNameandLastName(name.value)) {
      errors.push("El nombre no puede estar vacío");
    }

    if (!validateNameandLastName(lastName.value)) {
      errors.push("El apellido no puede estar vacío");
    }

    if (!validateCity(city.value)) {
      errors.push(
        "La ciudad no debe estar vacía y tiene que tener mas de 4 caracteres"
      );
    }

    if (!validateState(state.value)) {
      errors.push("Debes escoger algun estado");
    }

    return errors;
  }

  function validateNumberCard(card) {
    return card.trim() !== "" && card.length >= 16 && card.length <= 20; //Primera validación
  }

  function validateCVC(cvc) {
    return cvc.trim() !== "" && cvc.length >= 4 && cvc.length <= 6; //segunda validación
  }

  function validateAmount(amount) {
    return amount.trim() !== "";
  }

  function validateNameandLastName(name) {
    return name.trim() !== "" && name.length >= 2 && name.length <= 10;
  }

  function validateCity(city) {
    return city.trim() !== "" && city.length >= 4 && city.length <= 8;
  }

  function validateState(state) {
    return state === "1" || state === "2" || state === "3";
  }
};
