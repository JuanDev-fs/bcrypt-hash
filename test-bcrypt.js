/* REQUERIMIENTOS para usar bcrypr*/

const bcrypt = require('bcrypt');
const saltRounds = 10;


// Los datos de USUARIO son los datos que se obtendrian de un formulario de login
// por ejemplo usando body-parser: let nombre = req.body.nombre y let password = req.body.password
// tambien se podria hacer: let {nombre,password}=req.body
// en ambos caso se podria crear el usuario con estos datos haciendo:  const usuario = {nombre,password} 
let USUARIO = {
    nombre:"Valentin",
    password:"12345678"
}

//password que ingreso en el formulario
const myPassword = USUARIO.password;
console.log(myPassword);


//password de prueba en este caso son iguales
//probar cambiando este password simulando un ingreso en el formulario
const myPassword1="12345678";



//async
// con esto creo el hash (la clave encriptada del password ingresado en el formulario).
// este hash, es el que se guarda en la base de datos, NUNCA se guarda el password sin encriptar
const hash = bcrypt.hashSync(myPassword, saltRounds);
console.log(hash);


// Con esto comprobamos si el password de prueba (por ejemplo otro password que puse en el formulario)
// corresponde al hash de la base de datos.
// la comparacion devuelve true or false.
const isPasswordValid = bcrypt.compareSync(myPassword1, hash)
console.log(isPasswordValid);


//para probar en el terminal ejecute: node test-bcrypt.js