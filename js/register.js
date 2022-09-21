function register(){
let userName = document.getElementById('userName').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
let pass = document.getElementById('pass').value;
let checkPass = document.getElementById('checkPass').value;

let localSTG = JSON.parse(localStorage.getItem('users')) || [] ;

const array = []


if (userName === '' || lastName === '' || email === '' || pass === '' || checkPass === '') {
   console.log('Formulario incompleto')   
} 
else {
   for (let i = 0; i < localSTG.length; i++) {
      const usuarioEnLocalSTG = localSTG[i];
      array.push(usuarioEnLocalSTG)
   }

   let userExist = localSTG.filter(local => local.userName === userName)
   console.log('userExist',userExist)
   
   if (userExist.length === 0){
      if (pass === checkPass){
         array.push({id: localSTG.length + 1,userName,lastName,email,pass,matricula,condition:'inactive'})
         localStorage.setItem('users',JSON.stringify(array))
         console.log(array)
      }else{
         alert('Las contraseñas no coinciden')
      }
   }if (userExist.length !== 0) {
      alert('Ya se encuentra registrado')
   }
}
}    
