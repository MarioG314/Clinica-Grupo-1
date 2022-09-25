let localSTG = JSON.parse(localStorage.getItem("users"));
let localSTGAdmin = JSON.parse(localStorage.getItem("admin"));


let tableAdminBody = document.getElementById("table-admin-body");
let tableUsersBody = document.getElementById("table-users-body");


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
