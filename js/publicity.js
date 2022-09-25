// Creacion de objeto publicidades en localStorage
let localSTGPublicity = JSON.parse(localStorage.getItem("publicity"));
let tablePublicitysBody = document.getElementById("table-publicitys-body");

// Inputs de formulario CREAR publicidad
let codigoInput = document.getElementById("exampleInputCode1");
let urlInput = document.getElementById("exampleInputUrl1");
let categoriaInput = document.getElementById("exampleInputCategoria1");
let descripcionInput = document.getElementById("exampleInputDescripcion1");

let botonCrear = document.getElementById("staticBackdrop");
let modalCrearPublicidad = document.querySelector("#staticBackdrop");
// Crear Nueva Publicidad
let publicityArray = [];


// Eventos crear publicidad

botonCrear.addEventListener("submit", crearPublicidad)


cargarEventListeners();
function cargarEventListeners(e){
    codigoInput.addEventListener('change', datosPublicidad);
    urlInput.addEventListener('change', datosPublicidad);
    categoriaInput.addEventListener('change', datosPublicidad);
    descripcionInput.addEventListener('change', datosPublicidad);



}

const newObject = {
    id: '',
    url: '',
    categoria: '',
    descripcion: ''
    
}

function datosPublicidad(e){
    newObject[e.target.name] = e.target.value;
    // console.log(newObject);
}

function crearPublicidad(){
    console.log(newObject);

}
function crearPublicidades(objeto){
    //Desestructuracion
    const{ codigoInput, urlInput, categoriaInput, descripcionInput } = objeto; 
    
    // Validacion
if( codigoInput === '' || urlInput === '', categoriaInput === '', descripcionInput === '' ){
    console.log('Todos los campos deben ser completados');
} else {
    console.log('Categoria creada exitosamente');
}

publicityArray = [...publicityArray, newObject];
console.log(publicityArray);

    // objeto.forEach(publicidad => publicityArray.push(publicidad))
}

let publicitys = [
    {
        id: 380,
        img: { src:"../img/publicidad1.png"},
        categoria: "cardio",
        descripcion: "",
        destacado:true
    },
    {
        id: 390,
        img: { src:"../img/publicidad2.jpg"},
        categoria: "cardio",
        descripcion: "",
        destacado:false
    }
]

localStorage.setItem("publicity", JSON.stringify(publicitys));

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


// const aceptar = document.querySelector('#agree');
// const negar = document.querySelector('#disclaim')
// const star = document.querySelector('#star');

// star.addEventListener('click',() => {
//     if (star.classList.contains("text-warning")){
//         star.classList.remove();
//         star.classList.add("fa-solid",  "fa-star",  "admin-icon-table");
//         console.log(star.classList);
//     }
// } )

// star.addEventListener('click', cambiarEstilo);

// function cambiarEstilo(e){
//     if(e.target.classList.contains("text-warning")){
//         e.target.classList.replace('text-warning', "fa-solid", "fa-star", "admin-icon-table");
//     }else{
//         e.target.classList.add('text-warning');
//         }
// }