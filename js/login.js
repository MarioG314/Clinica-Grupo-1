function log() {
  let email = document.getElementById("email").value;
  console.log(email)
  let pass = document.getElementById("pass").value;
  console.log(pass)
  let usersSTG = JSON.parse(localStorage.getItem("users")) || [];
  console.log(usersSTG)
  let adminSTG = JSON.parse(localStorage.getItem("admin"));

  usersSTG.push(adminSTG);
  console.log(usersSTG);
  let userLoged = usersSTG.find(
    (user) =>
      user.email === email && user.pass === pass && user.condition === "active"
  );

  if (userLoged) {
    localStorage.setItem("userId", JSON.stringify(userLoged.id));
    setTimeout(() => {
      switch (userLoged.role) {
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
