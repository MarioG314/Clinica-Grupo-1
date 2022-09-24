
function log () {
    let userName = document.getElementById('userName').value
    let pass = document.getElementById('pass').value
    let localSTG = JSON.parse(localStorage.getItem('users')) || []
    let userExist = localSTG.filter(local => local.userName === userName)

    if (userExist.length > 0) {
        if(userExist[0].pass === pass){
            localStorage.setItem('id',JSON.stringify(userExist[0].id))
            setTimeout( ()=> {
            switch (userExist[0].role) {
                case admin:
                location.href = '../html/admin.html'    
                case Paciente:
                location.href = '../html/usuarios.html'
                case Medico:
                location.href = '../html/paediatrician.html'
                default:
                location.href = '../html/login.html'
                break;
            }
        },2000);
    }
    }
}

