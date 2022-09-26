const filterDoctors = (serviceId) => {
  return fetchDoctors().filter((doctor) => doctor.serviceId === serviceId);
};

const fetchDoctors = () => {
  return fetchItems("users").filter((user) => user.role === "Doctor");
};

window.addEventListener("load", function (evt) {
  const doctors = fetchDoctors();
  if (doctors.length === 0) {
    const services = fetchServices();

    for (let i = 0; i < services.length; i++) {
      for (let j = 0; j < 3; j++) {
        createItem("users", {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          role: "Doctor",
          matricula: faker.random.number(),
          password: faker.internet.password(),
          condition: "inactive",
          serviceId: services[i].id,
        });
      }
    }
  }
});
