
const doctorDetails = document.getElementById('doctor-details');

const formConsulta = document.getElementById('formConsulta');

formConsulta.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const data = {
    userId: 287
    // FIXME userId: currentUser.id
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
    createItem('consultas', data);
    alert('Felicidades su consulta se realizó con éxito!');
    window.location.replace('/html/usuarios.html');
  } else {
    alert('Por favor, verifique el formulario');
  }
});

window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const doctorId = Number(urlParams.get('doctorId'));
  const doctor = findItem('users', doctorId);
  if (doctor) {
    document.getElementById('doctorId-input').value = doctor.id;
    doctorDetails.innerHTML = `
      <img src="/img/doctors/${doctor.id}.jpeg" class="card-img-top" alt="${doctor.userName} ${doctor.lastName}" />
      <div class="card-body">
        <h5 class="card-title">${doctor.userName} ${doctor.lastName}</div>
      </div>
    `;
  }
});
