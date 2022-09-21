// const newObjet = {
//    id:0,
//    userName:'Francisco',
//    lastName:'Teraclito',
//    email:'fran@gmail.com',
//    pass:'123456',
//    matricula:'none',
//    condition:'admin'
// }

// localStorage.setItem('users',JSON.stringify(newObjet))

function register(){
let userName = document.getElementById('userName').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
let pass = document.getElementById('pass').value;
let checkPass = document.getElementById('checkPass').value;

let localSTG = JSON.parse(localStorage.getItem('users')) || [] ;

const array = []


if (userName === '' || lastName === '' || email === '' || pass === '' || checkPass === '') {
   alert('Formulario incompleto')   
} 
else {
   for (let i = 0; i < localSTG.length; i++) {
      const usuarioEnLocalSTG = localSTG[i];
      array.push(usuarioEnLocalSTG)
   }

   let userExist = localSTG.filter(local => local.userName === userName)
   console.log('userExist',userExist);
   
   if (userExist.length === 0){
      if (pass === checkPass){
         array.push({id: localSTG.length,userName,lastName,email,pass,matricula:'none',condition:'inactive'})
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

function registerDr(){
   let userName = document.getElementById('userNameDr').value;
   let lastName = document.getElementById('lastNameDr').value;
   let matricula = document.getElementById('matricula').value;
   let email = document.getElementById('emailDr').value;
   let pass = document.getElementById('passDr').value;
   let checkPass = document.getElementById('checkPassDr').value;
   
   let localSTG = JSON.parse(localStorage.getItem('users')) || [] ;
   
   const array = []
   
   
   if (userName === '' || lastName === '' || email === '' || pass === '' || checkPass === '' || matricula === '') {
      alert('Formulario incompleto')   
   } 
   else {
      for (let i = 0; i < localSTG.length; i++) {
         const usuarioEnLocalSTG = localSTG[i];
         array.push(usuarioEnLocalSTG)
      }
   
      let userExist = localSTG.filter(local => local.matricula === matricula)
      console.log('userExist',userExist)
      
      if (userExist.length === 0){
         if (pass === checkPass){
            array.push({id: localSTG.length,userName,lastName,email,pass,matricula,condition:'inactive'})
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