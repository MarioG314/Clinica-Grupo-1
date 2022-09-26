(function validAdmin() {
  let id = localStorage.getItem("userId");
  let localSTG = JSON.parse(localStorage.getItem("admin")) || [];
  let userExists = localSTG.filter((local) => local.id === Number(id));

  if (id === null) {
    window.location.href = "../html/login.html";
  } else if (userExists[0].role === "admin") {
    window.location.href = "../html/homeAdmin.html";
  }
})();

const logout = () => {
  localStorage.removeItem("userId");
  window.location.href = "../html/login.html";
};

