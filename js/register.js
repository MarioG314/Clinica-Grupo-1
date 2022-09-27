function register() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let checkPass = document.getElementById("checkPass").value;

  let localSTG = JSON.parse(localStorage.getItem("users")) || [];

  const array = [];

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    pass === "" ||
    checkPass === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Formulario incompleto!",
      footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
    });
  } else {
    for (let i = 0; i < localSTG.length; i++) {
      const usuarioEnLocalSTG = localSTG[i];
      array.push(usuarioEnLocalSTG);
    }

    let userExist = localSTG.filter((local) => local.email === email);
    console.log("userExist", userExist);

    if (userExist.length === 0) {
      if (pass === checkPass) {
        array.push({
          id: localSTG.length + 1,
          firstName,
          lastName,
          email,
          pass,
          matricula: "",
          role: "Paciente",
          condition: "inactive",
        });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registro realizado con exito!",
          footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
        });
        localStorage.setItem("users", JSON.stringify(array));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las contraseñas no coinciden!",
          footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
        });
      }
    }
    if (userExist.length !== 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya se encuentra registrado!",
        footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
      });
    }
  }
}

function registerDr() {
  let firstName = document.getElementById("firstNameDr").value;
  let lastName = document.getElementById("lastNameDr").value;
  let matricula = document.getElementById("matricula").value;
  let email = document.getElementById("emailDr").value;
  let pass = document.getElementById("passDr").value;
  let checkPass = document.getElementById("checkPassDr").value;

  let localSTG = JSON.parse(localStorage.getItem("users")) || [];

  const array = [];

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    pass === "" ||
    checkPass === "" ||
    matricula === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Formulario incompleto!",
      footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
    });
  } else {
    for (let i = 0; i < localSTG.length; i++) {
      const usuarioEnLocalSTG = localSTG[i];
      array.push(usuarioEnLocalSTG);
    }

    let userExist = localSTG.filter((local) => local.matricula === matricula);
    console.log("userExist", userExist);

    if (userExist.length === 0) {
      if (pass === checkPass) {
        array.push({
          id: localSTG.length + 1,
          firstName,
          lastName,
          email,
          pass,
          matricula,
          role: "Doctor",
          condition: "inactive",
        });
        localStorage.setItem("users", JSON.stringify(array));
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registro realizado con exito!",
          footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las contraseñas no coinciden!",
          footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
        });
      }
    }
    if (userExist.length !== 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usted ya se encuentra registrado!",
        footer: '<a href="../html/login.html">¿Desea iniciar sesión?</a>',
      });
    }
  }
}
