let publicidades= JSON.parse(localStorage.getItem("publicity")) || []
let header = document.querySelector(".header")
console.log(header)
for (let i = 0; i < publicidades.length; i++) {
    const publicidad = publicidades[i];
    if(publicidad.destacado===true){
        header.style.backgroundImage = "url(`'${publicidad.img.src}'`)";
        console.log(publicidad.img.src)
    }
}