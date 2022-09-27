// LocalStorage de Publicidades
let localSTGPublicity = JSON.parse(localStorage.getItem("publicity")) || [];
// Tabla de contenidos
let tablePublicitysBody = document.getElementById("table-publicitys-body");

// Array de Publicidades
let publicityArray = [];

// Inputs de formulario CREAR publicidad
let codeInput = document.getElementById("exampleInputCode1");
let urlInput = document.getElementById("exampleInputUrl1");
let categoryInput = document.getElementById("exampleInputCategoria1");
let descriptionInput = document.getElementById("exampleInputDescripcion1");
let createPublicityForm = document.getElementById("create-publicity-form");


// Eventos 
loadEventListeners();
function loadEventListeners(){
    codeInput.addEventListener('change', publicityData);
    urlInput.addEventListener('change', publicityData);
    categoryInput.addEventListener('change', publicityData);
    descriptionInput.addEventListener('change', publicityData);
    
    // Eventos cuando el DOM esta cargado
document.addEventListener('DOMContentLoaded', ()=>{
        
    //Boton crear publicidad
    createPublicityForm.addEventListener("submit", createNewPublicity);
    console.log(publicityArray);
    printHTML(localSTGPublicity);
});





// // Clase para la Interfaz de Usuario
// class UI{
//     imprimirPublicidades({publicidades}){
        
//         this.limpiarHTML();

//         publicidades.forEach(publicidad =>{
//             const { codigo, url, categoria, descripcion, id } = publicidad;
            
//             const divPublicidades = document.createElement('tr');
//             divPublicidades.dataset.id = id;
            
//             //Scripting de los elementos de la publicidad
//             divPublicidades.innerHTML = `
//             <tr>
//             <th class="text-center align-middle " scope="row">${codigo}</th>
//             <td class="text-center align-middle" > 
//             <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop10">
//             <img class="img-publicity" src="${url}" alt="publicity-1">
//             </button>
            
//             <!-- Modal -->
//             <div class="modal fade" id="staticBackdrop10" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered">
//             <div class="modal-content modal-content-img-publicity">
            
//             <div class="modal-body d-flex justify-content-end ">
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            
//             </div>
            
//             </div>
//             </div>
//             </div>
//             </td>
//             <td class="text-center align-middle">${categoria}</td>
//             <td class="text-center align-middle" >${descripcion}</td>
          
//             <!-- comienzo de los 3 botones-->
//             <td class="text-center align-middle">
//             <div class="d-flex justify-content-center ">
//             <!-- Button trigger modal -->
//             <button type="button" class="btn btn-light btn-table-modal-width me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" onclick = eliminarPublicidad(${id})>
//             <i class=" fa-solid  fa-trash-can  admin-icon-table "></i>
//             </button>
            
//             <!-- Modal -->
//             <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false"
//             tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//             <div class="modal-dialog">
//             <div class="modal-content">
//             <div class="modal-header">
//             <h5 class="modal-title" id="staticBackdropLabel">Eliminar publicidad</h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body h4">
//             Estas seguro de eliminar la publicidad?
//             </div>
//             <div class="modal-footer">
//             <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
//             <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onclick="eliminarPublicidad(${id})">Confirmar</button>
//             </div>
//             </div>
//             </div>
//             </div><!-- fin boton de eliminar-->
            
//             <!-- Button trigger modal -->
//             <button type="button" class="btn-table-modal-width btn btn-light me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
//             <i  class=" fa-solid  fa-pen-to-square   admin-icon-table "></i>
//             </button>
            
//             <!-- Modal -->
//             <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
//             tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//             <div class="modal-dialog">
//             <div class="modal-content">
//             <div class="modal-header">
//             <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//             ...
//             </div>
//           <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary">Understood</button>
//           </div>
//           </div>
//           </div>
//           </div><!-- fin boton editar-->
          
//           <!-- Button trigger modal -->
//           <button type="button" class="btn btn-light btn-table-modal-width " data-bs-toggle="modal"
//           data-bs-target="#exampleModal3${id}">
//           <i id="" class="fa-solid fa-star admin-icon-table text-warning"></i>
//           </button>
          
//           <!-- Modal -->
//           <div class="modal fade   " id="exampleModal3${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div class="modal-dialog ">
//           <div class="modal-content">
//           <div class="modal-header admin-modal-header">
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
//           </button>
//           </div>
          
//           <div class="modal-body d-flex justify-content-center admin-modal-body">
          
//           <p class="fs-5 mt-4  "> Desea resaltar la publicidad</p>
          
//           </div>
          
//           <div class="modal-footer d-flex justify-content-center admin-modal-footer">
//           <button type="button" id="agree" class="btn btn-primary" onclick="destacarPublicidad(${id})" data-bs-dismiss="modal">Sí</button>
//           <button type="button" id="disclaim" class="btn btn-danger">No</button>
//           </div>
//           </div>
//           </div>
//           </div>
//           </div>
//           </td>
//           </tr>
//           `;
          
//         // Agregar las publicidades al contenedor de la lista
//         tablePublicitysBody.appendChild(divPublicidades);
        
//     });
    
//     sincronizarLocalStorage();
//     }

//     limpiarHTML(){
//         while(tablePublicitysBody.firstChild){
//             tablePublicitysBody.removeChild(tablePublicitysBody.firstChild);
//         }
//     }
// }

// // Clase para manejar las publicidades
// class Publicidades{
//     constructor(publicidades) {
//         this.publicidades = publicidades;
        
//     }
    

//     //Metodo para agregar Publicidad
//     agregarPublicidad(publicidad){
//         // Agrega la publicidad actual al arreglo de publicidades
//         this.publicidades = [...this.publicidades, publicidad];
        
//     }

//     eliminarPublicidad(id){
//         this.publicidades = this.publicidades.filter(publicidad => publicidad.id !== id);
    
//         ui.imprimirPublicidades(administrarPublicidades);
//     }

// }

const newObject = {
    code: '',
    url: '',
    category: '',
    description: '',
}

function publicityData(e){
    newObject[e.target.name] = e.target.value;
    newObject.id = codeInput.value;
    // console.log(newObject);
    
}

function createNewPublicity(e){
    e.preventDefault();
    console.log('Submit');
        
    //Desestructuracion para extraer la informacion del objeto newObject
    const { code, url, category, description } = newObject;

    // Validacion
    if(code === '' || url === '' || category === '' || description === ''){
        console.log('Todos los campos deben ser completados');

        return;
    } 

    /* Crear una nueva publicidad
    // FIXME: Se aplica REST operator {...} Para pasar una copia del objeto
    newObject, sino este se sobreescribe y se pasa siempre el mismo objeto al array
    */ 
    publicityArray = [...publicityArray, {...newObject}];
    console.log(publicityArray);

    printHTML(publicityArray);
    // administrarPublicidades.agregarPublicidad({...newObject});

    syncLocalStorage();
    // sincronizarLocalStorage(administrarPublicidades);
    
    //Reiniciar objeto para la validacion correcta, sin repetirse
    restartObject();
    
    //Reiniciar formulario
    createPublicityForm.reset();
    
    //Mostrar el HTML de las publicidades creadas
    // ui.imprimirPublicidades(JSON.parse(localStorage.getItem("publicity")));
}

function deletePublicity(id){
    publicityArray = publicityArray.filter(publicidad => publicidad.id !== id);

    console.log(publicityArray);

    // printHTML(publicityArray);
    

}



function restartObject(){
    newObject.code = '';
    newObject.url = '';
    newObject.category = '';
    newObject.description = '';
}

function syncLocalStorage(){
    // Inyeccion de array de publicidades al LST
    localStorage.setItem("publicity",JSON.stringify(publicityArray));
    
    }
    
}

function printHTML(object) {

        cleanHTML();
        
        object.forEach(publicity => {
            const { code, url, category, description, id } = publicity;

            const divPublicitys = document.createElement('tr');
            divPublicitys.dataset.id = id;

            //Scripting de los elementos de la publicidad
            divPublicitys.innerHTML = `
                    <tr>
                    <th class="text-center align-middle " scope="row">${code}</th>
                    <td class="text-center align-middle" > 
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop10">
                    <img class="img-publicity" src="${url}" alt="publicity-1">
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
                    <td class="text-center align-middle">${category}</td>
                    <td class="text-center align-middle" >${description}</td>
                  
                    <!-- comienzo de los 3 botones-->
                    <td class="text-center align-middle">
                    <div class="d-flex justify-content-center ">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-light btn-table-modal-width me-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" onclick = deletePublicity(${id})>
                    <i class=" fa-solid  fa-trash-can  admin-icon-table "></i>
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Eliminar publicidad</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body h4">
                    Estas seguro de eliminar la publicidad?
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary"  data-bs-dismiss="modal" onclick="deletePublicity(${id})">Confirmar</button>
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
                  data-bs-target="#exampleModal3${id}">
                  <i id="" class="fa-solid fa-star admin-icon-table text-warning"></i>
                  </button>
                  
                  <!-- Modal -->
                  <div class="modal fade   " id="exampleModal3${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <button type="button" id="agree" class="btn btn-primary" onclick="destacarPublicidad(${id})" data-bs-dismiss="modal">Sí</button>
                  <button type="button" id="disclaim" class="btn btn-danger">No</button>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </td>
                  </tr>
                  `;

            // Agregar las publicidades al contenedor de la lista
            tablePublicitysBody.appendChild(divPublicitys);

        });

        
}

function cleanHTML(){
    while(tablePublicitysBody.firstChild){
        tablePublicitysBody.removeChild(tablePublicitysBody.firstChild);
    }
}


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






