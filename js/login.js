function log() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let localSTG = JSON.parse(localStorage.getItem("users")) || [];
  let userExist = localSTG.filter((local) => local.email === email);

  if (userExist.length > 0) {
    if (userExist[0].pass === pass) {
      localStorage.setItem("id", JSON.stringify(userExist[0].id));
      setTimeout(() => {
        switch (userExist[0].role) {
          case "Admin":
            location.href = "../html/admin.html";
            break;
          case "Paciente":
            location.href = "../html/usuarios.html";
            break;
          case "Doctor":
            location.href = "../html/paediatrician.html";
            break;
          default:
            location.href = "../html/login.html";
        }
      }, 2000);
    }
  }
}
