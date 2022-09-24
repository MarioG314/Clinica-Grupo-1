let localSTG = JSON.parse(localStorage.getItem("users"));
let localSTGAdmin = JSON.parse(localStorage.getItem("admin"));
let localSTGPublicity = JSON.parse(localStorage.getItem("publicity"));

let tableAdminBody = document.getElementById("table-admin-body");
let tableUsersBody = document.getElementById("table-users-body");
let tablePublicitysBody = document.getElementById("table-publicitys-body");

const RenderAdminFrancisco = () => {
  tableAdminBody.innerHTML = `  <tr>
                <th class="text-center align-middle" scope="row">${localSTGAdmin.id}</th>
                <td class="text-center align-middle">${localSTGAdmin.userName}</td>
                <td class="text-center align-middle">${localSTGAdmin.lastName}</td>
                <td class="text-center align-middle" >${localSTGAdmin.role}</td>
                <td class="text-center align-middle"></td>

                <td class="text-center align-middle"></td>
              </tr>`;
};

const RenderAdminUsers = () => {
  tableUsersBody.innerHTML = localSTG.map(
    (users) =>
      ` <tr>
                <th class="text-center text-dark align-middle" scope="row">${users.id}</th>
                <td class="text-center text-dark align-middle">${users.userName}</td>
                <td class="text-center text-dark align-middle">${users.lastName}</td>
                <td class="text-center text-dark align-middle" >${users.role}</td>
                <td class="text-center text-dark align-middle" >${users.matricula}</td>

                <td class="d-flex justify-content-center">
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-light btn-table-modal-width me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i class="fa-solid  fa-trash-can  admin-icon-table "></i>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-light btn-table-modal-width me-1 " data-bs-toggle="modal" data-bs-target="#staticBackdrop${users.id}">
                    <i class="fa-solid  fa-pen-to-square   admin-icon-table "></i>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade  text-dark" id="staticBackdrop${users.id}" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Realizar cambios</h5>
                          <button type="button" class="btn-close"   data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                              <form>
            <div class="mb-2 mt-3">
               <label for="userNameChange${users.id}" class="form-label">Nombre</label>
               <input type="text" class="form-control" id="userNameChange${users.id}" value = ${users.userName}>
            </div>
            <div class="mb-2">
               <label for="lastNameChange${users.id}" class="form-label">Apellido</label>
               <input type="text" class="form-control" id="lastNameChange${users.id}" value = ${users.lastName}>
            </div>
            <div class="mb-2" id="inputMatricula${users.id}">
               <label for="matriculaChange${users.id}" class="form-label">Matrícula</label>
               <input type="text" class="form-control" id="matriculaChange${users.id}" value = ${users.matricula}>
            </div>
            <div class="mb-2">
              <label for="rolChange${users.id}" class="form-label">Rol</label>
              <input type="text" class="form-control" id="rolChange${users.id}" aria-describedby="rolChange"value= ${users.role}>
            </div>
           
            <div class="text-center">
            <button type="button" class="btn btn-primary  mt-3" onclick="changeAdmin(${users.id})">Guardar cambios</button>
            </div>
         </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <!-- Button trigger modal -->
                  <button type="  button" id= "checkbuttom${users.id}"  class="btn btn-light btn-table-modal-width" data-bs-toggle="modal" data-bs-target="#exampleModal${users.id}">
                    <i class="fa-solid  fa-check  admin-icon-table "></i>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade   " id="exampleModal${users.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog ">
                      <div class="modal-content">
                        <div class="modal-header admin-modal-header">

                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body d-flex justify-content-center admin-modal-body">

                          <p class="fs-5 mt-4 text-dark "> Desea habilitar al usuario</p>

                        </div>

                        <div class="modal-footer d-flex justify-content-center admin-modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
                          <button type="button" class="btn btn-primary"  onclick="enableUser(${users.id})">Habilitar</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </td>
              </tr>`
  );
};
tablePublicitysBody.innerHTML = localSTGPublicity.map(
  (publicidad) =>
    `
  <tr>
  <th class="text-center align-middle " scope="row">385</th>
  <td class="text-center align-middle" > 
    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop10">
    <img class="img-publicity" src="${publicidad.img.src}" alt="publicity-1">
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop10" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content modal-content-img-publicity">
          
          <div class="modal-body d-flex justify-content-end ">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            
          </div>
         
        </div>
      </div>
    </div>
  </td>
  <td class="text-center align-middle">Cardiología</td>
  <td class="text-center align-middle" ></td>

  <!-- comienzo de los 3 botones-->
  <td class="text-center align-middle">
    <div class="d-flex justify-content-center ">
<!-- Button trigger modal -->
<button type="button" class="btn btn-light btn-table-modal-width me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
<i class=" fa-solid  fa-trash-can  admin-icon-table "></i>
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false"
tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
...
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Understood</button>
</div>
</div>
</div>
</div><!-- fin boton de eliminar-->

<!-- Button trigger modal -->
<button type="button" class="btn-table-modal-width btn btn-light me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
<i  class=" fa-solid  fa-pen-to-square   admin-icon-table "></i>
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
...
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Understood</button>
</div>
</div>
</div>
</div><!-- fin boton editar-->

<!-- Button trigger modal -->
<button type="button" class="btn btn-light btn-table-modal-width " data-bs-toggle="modal"
data-bs-target="#exampleModal3${publicidad.id}">
<i id="" class="fa-solid fa-star admin-icon-table text-warning"></i>
</button>

<!-- Modal -->
<div class="modal fade   " id="exampleModal3${publicidad.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog ">
<div class="modal-content">
<div class="modal-header admin-modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
</button>
</div>

<div class="modal-body d-flex justify-content-center admin-modal-body">

<p class="fs-5 mt-4  "> Desea resaltar la publicidad</p>

</div>

<div class="modal-footer d-flex justify-content-center admin-modal-footer">
<button type="button" id="agree" class="btn btn-secondary" onclick="destacarPublicidad(${publicidad.id})" data-bs-dismiss="modal">Sí</button>
<button type="button" id="disclaim" class="btn btn-primary">No</button>
</div>
</div>
</div>
</div>
</div>
</td>
</tr>
  `
);

function destacarPublicidad(id) {
  console.log(id);
  let publicidades = JSON.parse(localStorage.getItem("publicity")) || [];
  const arrayPublicidad = [];
  for (let i = 0; i < publicidades.length; i++) {
    const publicidad = publicidades[i];
    if (publicidad.id === id) {
      publicidad.destacado = true;
      arrayPublicidad.push(publicidad);
      console.log(publicidad);
    } else {
      arrayPublicidad.push(publicidad);
    }
  }
  localStorage.setItem("publicity", JSON.stringify(arrayPublicidad));
  console.log("arrayPublicidad", arrayPublicidad);
}

const usersActive = () => {
  let activeUsers = localSTG.filter((users) => users.condition === "active");
  activeUsers.forEach((active) => {
    let deleteCheckButtom = document.getElementById(`checkbuttom${active.id}`);
    let deleteCheckButtomModal = document.getElementById(
      `exampleModal${active.id}`
    );

    deleteCheckButtom.style.display = "none";
    deleteCheckButtomModal.style.display = "none";
  });
};
const enableUser = (checkModalId) => {
  setTimeout(function () {
    const userEnable = localSTG.filter((users) => users.id === checkModalId);

    userEnable[0].condition = "active";
    let activeLocalSGT = localStorage.setItem(
      "users",
      JSON.stringify(localSTG)
    );

    let deleteCheckButtom = document.getElementById(
      `checkbuttom${checkModalId}`
    );
    let deleteCheckButtomModal = document.getElementById(
      `exampleModal${checkModalId}`
    );
    location.href = "../html/admin.html";
  }, 300);
};

const changeAdmin = (changeAdminId) => {
  setTimeout(function () {
    let nameChange = document.getElementById(
      `userNameChange${changeAdminId}`
    ).value;

    let matriculaChange = document.getElementById(
      `matriculaChange${changeAdminId}`
    ).value;
    let lastNameChange = document.getElementById(
      `lastNameChange${changeAdminId}`
    ).value;
    let roleChange = document.getElementById(`rolChange${changeAdminId}`).value;

    const adminChange = localSTG.filter((users) => users.id === changeAdminId);

    adminChange[0].userName = nameChange;
    adminChange[0].lastName = lastNameChange;
    adminChange[0].matricula = matriculaChange;
    adminChange[0].role = roleChange;

    let changeLocalSGT = localStorage.setItem(
      "users",
      JSON.stringify(localSTG)
    );
    location.href = "../html/admin.html";
  }, 300);
};

const matriculaPatientDelete = () => {
  let modalChangeUsers = localSTG.filter((users) => users.role === "Paciente");
  modalChangeUsers.forEach((matricula) => {
    let deleteMatriculaInput = document.getElementById(
      `inputMatricula${matricula.id}`
    );

    deleteMatriculaInput.style.display = "none";
  });
};

RenderAdminFrancisco();
RenderAdminUsers();
usersActive();
matriculaPatientDelete();
