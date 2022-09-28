const doctorDetails = document.getElementById("doctor-details");

const formConsulta = document.getElementById("formConsulta");

formConsulta.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = {
    userId: Number(localStorage.getItem("userId")),
    createdAt: Date.now(),
  };
  let valid = true;
  for (var key of formData.keys()) {
    const value = formData.get(key);
    data[key] = value;
    if (!value) {
      valid = false;
    }
  }

  if (valid) {
    createItem("consultas", data);
    alert("Su consulta se realizó con éxito!");
    window.location.replace("/html/usuarios.html");
  } else {
    alert("Por favor, verifique el formulario");
  }
});

window.addEventListener("load", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const doctorId = Number(urlParams.get("doctorId"));
  const doctor = findItem("users", doctorId);
  if (doctor) {
    document.getElementById("doctorId-input").value = doctor.id;
    document.getElementById("doctorImg").src = doctor.photo;
    document.getElementById(
      "doctorName"
    ).innerHTML = `${doctor.firstName} ${doctor.lastName}`;
    document.getElementById("doctorMatricula").innerHTML = doctor.matricula;
    document.getElementById("doctorHorarios").innerHTML = doctor.horarios;
    document.getElementById("doctorDescription").innerHTML = doctor.description;
  }
});
