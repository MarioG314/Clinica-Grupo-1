// (function validPaciente() {
//   let id = localStorage.getItem("userId");
//   let localSTG = JSON.parse(localStorage.getItem("users")) || [];
//   let userExists = localSTG.filter((user) => user.id === Number(id));

//   if (id === null) {
//     window.location.href = "../html/login.html";
//   } else if (userExists[0].role === "Paciente") {
//     window.location.href = "../html/usuarios.html";
//   }
// })();

// const logout = () => {
//   localStorage.removeItem("userId");
//   window.location.href = "../html/login.html";
// };