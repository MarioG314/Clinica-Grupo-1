const admin = {
  id: 0,
  userName: "Francisco",
  lastName: "Terán",
  role: "Admin",
  email: "fran@gmail.com",
  pass: "123456",
  condition: "active",
};

localStorage.setItem("admin", JSON.stringify(admin));
