// Creacion de objeto publicidades en localStorage

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
        img: { src:"../img/publicidad1.png"},
        categoria: "cardio",
        descripcion: "",
        destacado:false
    }
]

localStorage.setItem("publicity", JSON.stringify(publicitys));





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