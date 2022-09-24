
const searchInput = document.getElementById('search');
const results = document.getElementById('results');

const renderServicesAndDoctors = () => {
  const services = fetchServices();
  let service;
  let doctors;
  let doctor;

  for(let i = 0; i < services.length; i++) {
    service = services[i];
    doctors = filterDoctors(service.id);
    results.insertAdjacentHTML('beforeend', `
      <div class="col-12 item" data-keyword="${service.name} ${doctors.map(doc => `${doc.userName} ${doc.lastName}`).join(' ')}">
        <p class="display-6">
          ${service.name}
        </p>
      </div>
    `);

    for(let j = 0; j < doctors.length; j++) {
      doctor = doctors[j];
      results.insertAdjacentHTML('beforeend', `
        <div class="col-4 item" data-keyword="${service.name} ${doctor.userName} ${doctor.lastName}">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${doctor.userName} ${doctor.lastName}</h5>
              <p class="card-text text-muted">Matrícula profesional: ${doctor.professionalRegistration}</p>
              <a href="/html/pedirTurno.html?doctorId=${doctor.id}" class="btn btn-outline-primary">Pedir turno</a>
            </div>
          </div>
        </div>
      `);
    }
  }
}

const filterServicesAndDoctors = (query) => {
  const q = (query || '').toLowerCase();
  Array.from(results.getElementsByClassName('item')).forEach(item => {
    if ((q === '' || item.dataset.keyword.toLowerCase().includes(q)) && item.classList.contains('d-none')) {
      item.classList.remove('d-none');
    } else if ((q !== '' && !item.dataset.keyword.toLowerCase().includes(q)) && !item.classList.contains('d-none')) {
      item.classList.add('d-none');
    }
  });
}

searchInput.addEventListener('input', function(evt) {
  filterServicesAndDoctors(evt.target.value);
});

window.addEventListener('load', function() {
  renderServicesAndDoctors();
});
