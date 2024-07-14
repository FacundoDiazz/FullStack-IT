
//operadores relacionales en Java Script
// > mayor que
let uno = 150
let dos = 500

let mayor = uno > dos;
console.log('el numero' + uno + 'es mayor que' + dos + ':' + mayor)


let menor = uno < dos;
console.log('el numero' + uno + 'es menor que' + dos +':' + menor)


let igual = uno == dos;
console.log('el numero' + uno + 'es igual que' + dos + ':' + igual)


let diferente = uno != dos;
console.log('el numero' + uno + 'es diferente que' + dos +':' + diferente)

// conbinaciones
let mayorIgual = uno >= dos;
console.log('el numero' + uno + 'es mayor o igual que' + dos +':' + mayorIgual)

let menorigual = uno <= dos;
console.log('el numero' + uno + 'es menor o igual que' + dos +':' + menorigual)

let identico = uno === dos; //clon 
console.log('el numero' + uno + 'es identico que' + dos +':' + identico)


// Condicionales (if)
//()==> condicion que evalua el si logico
//{}==> bloque de codigo que se ejecuta si la condicion se cumple
// se cumple con un booleano: TRUE / FALSE 
//si es true se ejecuta el bloque de cdigo en la terminal
//si es fale no se ejecuta el bloque de codigo

let octavos = true
 if(octavos){
    console.log( 'el partido de octavos de final se juega el 4 de julio');
 }

 console.log('===================')

 let edad = 18;
let inscripto = true;
let argentino = true;

 if(edad >= 18){
    console.log('1.puede votar')
 }

 console.log('===================')

 //IF anidado
if(edad >= 18){
    if(inscripto){
        console.log('2.puede votar')
    }
}
console.log('===================')

if(edad >= 18){
    if(inscripto){
        if(argentino)
        console.log('3.puede votar')
    }
}

console.log('===================')

//operadores logicos && (and) !! (or) ! (not)

if(edad >= 18 && inscripto && argentino){
        console.log('4.puede votar')
    }

    console.log('===================')

 let email = 'pepe@gmail.com';
 let pasword = '1234'

 if(email=='pepe@gmail.com' && pasword== '1234'){
    console.log('5.Bienvendo a la plataforma')
 }

    console.log('===================')

let emailUno = 'pepe@gmail.com';
let paswordUno = '1234567'

if(emailUno=='pepe@gmail.com' || paswordUno== '1234'){
    console.log('6.Bienvendo a la plataforma')
 }

 console.log('===================')

 let club = 'true';
console.log(club)

 if(!club){
    console.log('7.genial con tu club')
 }

console.log(!club)

console.log('===================')

