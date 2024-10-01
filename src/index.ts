(function () {
  type htmlInput = HTMLInputElement | null;
  const formSubmit = document.querySelector(".form-submit");
  const inputName: htmlInput = document.querySelector("#input-name");
  const inputEmail: htmlInput = document.querySelector("#input-email");
  const inputPassword: htmlInput = document.querySelector("#input-password");
  const inputConfirmPassword: htmlInput = document.querySelector(
    "#input-confirm-password"
  );

  if (!formSubmit) {
    return;
  }
  formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    createUser();
  });

  function createUser() {
    if (!inputName) {
      return;
    }
    const nameIsValid = validateName(inputName.value);

    if (!inputEmail) {
      return;
    }
    const emailIsValid = validateEmail(inputEmail.value);

    if (!inputPassword || !inputConfirmPassword) {
      return;
    }

    const passwordIsValid = validatePassword(inputPassword.value);
    const samePasswordIsValid = validateSamePassword(
      inputPassword.value,
      inputConfirmPassword.value
    );

    if (!nameIsValid) {
      return showAlert("Nome inválido!");
    }

    if (!emailIsValid) {
      return showAlert("E-mail inváido!");
    }

    if (!passwordIsValid) {
      return showAlert("A senha deve ter mais de 5 caracteres!");
    }

    if (!samePasswordIsValid) {
      return showAlert("senhas não são identicas!");
    }

    return showAlert("Usuario criado!");
  }

  function validateName(name: string) {
    return name.length > 2;
  }

  function validateEmail(email: string) {
    // Expressão regular para validar o e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Testa o e-mail com a regex
    return regex.test(email);
  }

  function validatePassword(password: string) {
    return password.length > 5;
  }

  function validateSamePassword(password: string, passwordConfirm: string) {
    return password === passwordConfirm;
  }

  function showAlert(message: string) {
    alert(message);
  }
})();
