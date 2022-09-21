// Funcionalidad seleccionando la estrella

const star = document.querySelector('#star');

star.addEventListener('click',() => {
    if (star.classList.contains("text-warning")){
        star.classList.remove();
        star.classList.add("fa-solid",  "fa-star",  "admin-icon-table");
    }
} )

