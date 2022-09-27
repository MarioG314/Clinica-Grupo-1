let localSTG = JSON.parse(localStorage.getItem("users")) || [];
let localSTGAdmin = JSON.parse(localStorage.getItem("admin"));
let localSTGCheck = JSON.parse(localStorage.getItem("idAlertCheck")) || {
  id: 0,
};
let localSTGDelete = JSON.parse(localStorage.getItem("idAlertDelete")) || {
  id: 0,
};
let localSTGModify = JSON.parse(localStorage.getItem("idAlertModify")) || {
  id: 0,
};
let tableAdminBody = document.getElementById("table-admin-body");
let tableUsersBody = document.getElementById("table-users-body");

const RenderAdminFrancisco = () => {
  tableAdminBody.innerHTML = `  <tr>
                <th class="text-center align-middle" scope="row">${localSTGAdmin.id}</th>
                <td class="text-center align-middle">${localSTGAdmin.firstName}</td>
                <td class="text-center align-middle">${localSTGAdmin.lastName}</td>
                <td class="text-center align-middle" >${localSTGAdmin.role}</td>
                <td class="text-center align-middle"></td>

                <td class="text-center align-middle"></td>
              </tr>`;
};

const RenderAdminUsers = () => {
  tableUsersBody.innerHTML = localSTG
    .map(
      (users) =>
        ` <tr>
                <th class="text-center text-dark align-middle" scope="row">${users.id}</th>
                <td class="text-center text-dark align-middle">${users.firstName}</td>
                <td class="text-center text-dark align-middle">${users.lastName}</td>
                <td class="text-center text-dark align-middle" >${users.role}</td>
                <td class="text-center text-dark align-middle" >${users.matricula}</td>

                <td class="d-flex justify-content-center">
                
      <button id="iconTrash${users.id}" type="button" class="btn btn-light btn-table-modal-width me-1 " data-bs-toggle="modal" data-bs-target="#staticBackdropdelete${users.id}">
                    <i class="fa-solid  fa-trash-can  admin-icon-table "></i>
                  </button> -->

                  
                 <div class="modal fade" id="staticBackdropdelete${users.id}" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content admin-modal-bg">
                        <div class="modal-header admin-modal-header">
                        
                          <button type="button" class="btn-close fs-6" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center fs-4 text-dark">
                         <p class="text-center">Desea eliminar a este usuario</p>
                        </div>
                        <div class="modal-footer d-flex justify-content-center admin-modal-footer">
                          
                          <button type="button" class="admin-modal-btn-delete px-3 py-2 fs-6" onclick="deleteUser(${users.id})">Eliminar</button>
                        </div>
                      </div>
                    </div>
                  </div> 

                  <!-- Button trigger modal -->
                  <button id="iconModify${users.id}" type="button" class="btn btn-light btn-table-modal-width me-1 " data-bs-toggle="modal" data-bs-target="#staticBackdropmodify${users.id}">
                    <i class="fa-solid  fa-pen-to-square   admin-icon-table "></i>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade  text-dark" id="staticBackdropmodify${users.id}" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered ">
                      <div class="modal-content admin-modal-bg">
                        <div class="modal-header admin-modal-header d-flex justify-content-center px-0 py-3 ">
                          <h5 class="modal-title admin-modal-title   fs-4  text-center " id="staticBackdropLabel">Realizar cambios</h5>
                          <div class =" d-flex justify-content-end" >
                          <button type="button" class="btn-close fs-6  "   data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          </div>
                        <div class="modal-body">
                              <form>
            <div class="mb-2 mt-3">
               <label for="firstNameChange${users.id}" class="form-label fs-6">Nombre</label>
               <input type="text" class="form-control" id="firstNameChange${users.id}" value = ${users.firstName}>
            </div>
            <div class="mb-2">
               <label for="lastNameChange${users.id}" class="form-label fs-6">Apellido</label>
               <input type="text" class="form-control" id="lastNameChange${users.id}" value = ${users.lastName}>
            </div>
            <div class="mb-2" id="inputMatricula${users.id}">
               <label for="matriculaChange${users.id}" class="form-label fs-6">Matrícula</label>
               <input type="text" class="form-control" id="matriculaChange${users.id}" value = ${users.matricula}>
            </div>
            
                   <div class="mb-2">
              <h6 class="fs-6 ">Rol</h6>
            <select class="form-select mb-3"   id="rolChange${users.id}"   >
  <option id="inputSelector${users.id}" value="${users.role} " class="fs-6">${users.role}</option>
  <option  id="otherInputSelector${users.id}"  class="fs-6"></option>
  
</select>
            </div>
           
            <div class="text-center">
            <button type="button" class="admin-modal-btn-accept px-3 py-2 mt-3 fs-6" onclick="changeAdmin(${users.id})">Guardar cambios</button>
            </div>
         </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <!-- Button trigger modal -->
                  <button type="  button" id= "checkbuttom${users.id}"  class="btn btn-light btn-table-modal-width me-3" data-bs-toggle="modal" data-bs-target="#exampleModal${users.id}">
                    <i class="fa-solid  fa-check  admin-icon-table "></i>
                  </button>

                  <!-- Modal -->
                  <div class="modal fade    " id="exampleModal${users.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered    ">
                      <div class="modal-content admin-modal-bg  ">
                        <div class="modal-header admin-modal-header">

                          <button type="button" class="btn-close fs-6  " data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body d-flex justify-content-center  admin-modal-body">

                          <p class="fs-4 mt-4 text-dark text-center "> Desea habilitar a este usuario</p>

                        </div>

                        <div class="modal-footer d-flex justify-content-center admin-modal-footer">
                          <button type="button" class=" admin-modal-btn-delete py-2 px-3 fs-6" onclick="deleteUser(${users.id})" data-bs-dismiss="modal">Rechazar</button>
                          <button type="button" class=" admin-modal-btn-accept py-2 px-3 fs-6 "  onclick="enableUser(${users.id})">Habilitar</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </td>
              </tr>`
    )
    .flat()
    .join("");
};

const usersActiveDeleteIconCheck = () => {
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
    let localSTGAlert = localStorage.setItem(
      "idAlertCheck",
      JSON.stringify({ id: checkModalId })
    );

    location.href = "../html/admin.html";
  }, 300);
};

const alertCheck = () => {
  setTimeout(function () {
    if (localSTGCheck.id !== 0) {
      Swal.fire({
        icon: "success",
        confirmButtonColor: "#0b50af",
        background: "#F1FAFB",
        text: "El usuario ha sido habilitado con éxito",
      });
      let localCheck = localStorage.setItem(
        "idAlertCheck",

        JSON.stringify({ id: 0 })
      );
    } else {
      [];
    }
  }, 600);
};

const changeAdmin = (changeAdminId) => {
  setTimeout(function () {
    let nameChange = document.getElementById(
      `firstNameChange${changeAdminId}`
    ).value;

    let matriculaChange = document.getElementById(
      `matriculaChange${changeAdminId}`
    ).value;
    let lastNameChange = document.getElementById(
      `lastNameChange${changeAdminId}`
    ).value;
    let roleChange = document.getElementById(`rolChange${changeAdminId}`).value;

    const adminChange = localSTG.filter((users) => users.id === changeAdminId);

    adminChange[0].firstName = nameChange;
    adminChange[0].lastName = lastNameChange;
    adminChange[0].matricula = matriculaChange;
    adminChange[0].role = roleChange;

    let changeLocalSGT = localStorage.setItem(
      "users",
      JSON.stringify(localSTG)
    );
    let localSTGAlert = localStorage.setItem(
      "idAlertModify",
      JSON.stringify({ id: changeAdminId })
    );
    location.href = "../html/admin.html";
  }, 300);
};

const alertModify = () => {
  setTimeout(function () {
    if (localSTGModify.id !== 0) {
      Swal.fire({
        icon: "success",
        confirmButtonColor: "#0b50af",
        background: "#F1FAFB",
        text: "El usuario ha sido modificado con éxito",
      });
      let localModify = localStorage.setItem(
        "idAlertModify",

        JSON.stringify({ id: 0 })
      );
    } else {
      [];
    }
  }, 600);
};

const matriculaModalPatientDelete = () => {
  let modalChangeUsers = localSTG.filter((users) => users.role === "Paciente");
  modalChangeUsers.forEach((matriculaDelete) => {
    let deleteMatriculaInput = document.getElementById(
      `inputMatricula${matriculaDelete.id}`
    );

    deleteMatriculaInput.style.display = "none";
  });
};
const matriculaLocalPatientDelete = () => {
  let localChangeUsers = localSTG.filter((users) => users.role === "Paciente");
  localChangeUsers.forEach((matriculaDelete) => {
    matriculaDelete.matricula = "";
  });
  localSTGDeleteMatriculaPatient = localStorage.setItem(
    "users",
    JSON.stringify(localSTG)
  );
};

const deleteUser = (userId) => {
  setTimeout(function () {
    arrayAfterDelete = [];
    localSTG.splice(userId - 1, 1);

    for (let i = 0; i < localSTG.length; i++) {
      localSTG[i].id = i + 1;
      const usuarioEnLocalSTG = localSTG[i];

      arrayAfterDelete.push(usuarioEnLocalSTG);
    }
    let localAfterDelete = localStorage.setItem(
      "users",
      JSON.stringify(arrayAfterDelete)
    );
    localSTGAlert = localStorage.setItem(
      "idAlertDelete",
      JSON.stringify({ id: userId })
    );
    location.href = "../html/admin.html";
  }, 300);
};

const deleteAlert = () => {
  setTimeout(function () {
    if (localSTGDelete.id !== 0) {
      Swal.fire({
        icon: "success",
        confirmButtonColor: "#0b50af",
        background: "#F1FAFB",
        text: "El usuario ha sido eliminado/rechazado con éxito",
      });
      let localDeleteId = localStorage.setItem(
        "idAlertDelete",

        JSON.stringify({ id: 0 })
      );
    } else {
      [];
    }
  }, 600);
};

const otherInputSelector = () => {
  localSTG.forEach((element) => {
    let otherInputSelector = document.getElementById(
      `otherInputSelector${element.id}`
    );
    let inputSelector = document.getElementById(`inputSelector${element.id}`);
    if (element.role === "Paciente") {
      otherInputSelector.innerHTML = `Doctor`;
      otherInputSelector.value = `Doctor`;
      inputSelector.innerHTML = `Paciente`;
      inputSelector.value = `Paciente`;
    } else {
      otherInputSelector.innerHTML = `Paciente`;
      otherInputSelector.value = `Paciente`;
    }
  });
};
const inactiveIconsDelete = () => {
  let inactiveIconsDelete = localSTG.filter(
    (users) => users.condition === "inactive"
  );
  inactiveIconsDelete.forEach((inactiveUsers) => {
    let deleteIconModify = document.getElementById(
      `iconModify${inactiveUsers.id}`
    );
    let deleteIconTrash = document.getElementById(
      `iconTrash${inactiveUsers.id}`
    );

    deleteIconModify.style.display = "none";
    deleteIconTrash.style.display = "none";
  });
};

matriculaLocalPatientDelete();
RenderAdminFrancisco();
RenderAdminUsers();
usersActiveDeleteIconCheck();
matriculaModalPatientDelete();
inactiveIconsDelete();
otherInputSelector();
alertCheck();
deleteAlert();
alertModify();
