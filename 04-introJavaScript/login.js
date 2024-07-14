
//base de datos
let email = 'admin@gmail.com';
let password ='1234';

//Recibimos datos del user
let emailUser = prompt ('Introduce tu email:');
let passwordUser = prompt ('introduce tu password:');

console.log('window');

//compara los datos del usr con los de la base de datos
if( email == emailUser && password == passwordUser){
    window.location = './index.html';
    //alert('Bienvenido a la plataforma bancaria');
}