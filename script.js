document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const acceptConditionsCheckbox = document.getElementById("accept-conditions");
    const submitButton = document.querySelector("input[type='submit']");
  
    function validarFormulario() {
      const nombreValido = nombreInput.checkValidity();
      const telefonoValido = telefonoInput.checkValidity();
      const passwordValido = passwordInput.checkValidity();
      const confirmPasswordValido = confirmPasswordInput.checkValidity();
      const conditionsAccepted = acceptConditionsCheckbox.checked;
  
      actualizarEstiloCampo(nombreInput, nombreValido);
      actualizarEstiloCampo(telefonoInput, telefonoValido);
      actualizarEstiloCampo(passwordInput, passwordValido);
  
      if (passwordValido) {
        if (confirmPasswordInput.value === passwordInput.value) {
          actualizarEstiloCampo(confirmPasswordInput, true);
        } else {
          actualizarEstiloCampo(confirmPasswordInput, false);
        }
      } else {
        actualizarEstiloCampo(confirmPasswordInput, true);
      }
  
      if (nombreValido && telefonoValido && passwordValido && confirmPasswordValido && conditionsAccepted) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }
  
    function actualizarEstiloCampo(inputElement, esValido) {
      inputElement.style.borderColor = esValido ? "green" : "red";
    }
  
    nombreInput.addEventListener("input", validarFormulario);
    telefonoInput.addEventListener("input", validarFormulario);
    passwordInput.addEventListener("input", validarFormulario);
    confirmPasswordInput.addEventListener("input", validarFormulario);
    acceptConditionsCheckbox.addEventListener("input", validarFormulario);
  
    submitButton.disabled = true;
  });
  