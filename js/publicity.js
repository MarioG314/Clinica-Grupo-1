// Funcionalidad seleccionando la estrella

const aceptar = document.querySelector('#agree');
const negar = document.querySelector('#disclaim')
const star = document.querySelector('#star');

// star.addEventListener('click',() => {
//     if (star.classList.contains("text-warning")){
//         star.classList.remove();
//         star.classList.add("fa-solid",  "fa-star",  "admin-icon-table");
//         console.log(star.classList);
//     }
// } )

star.addEventListener('click', cambiarEstilo);

function cambiarEstilo(e){
    if(e.target.classList.contains("text-warning")){
        e.target.classList.replace('text-warning', "fa-solid", "fa-star", "admin-icon-table");
    }else{
        e.target.classList.add('text-warning');
        }
}