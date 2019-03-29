//const fs = require('express');//paquetes que no son nativos de node
//const fs = require('./fs');//archivos que nosotros hicimos y estan en algun lugar del proyecto


//destructuracion para traer el modulo y guardar las funciones en un objeto
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //se importan los metodos del programa multiplicar

const argv = require('./config/yargs').argv;


let commando = argv._[0]; // no es un flat

switch (commando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`)).catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}


//let base = 10;
//console.log(process.arg);
//porcess y  module se crean automaticamente

//split convierte de string a array

//let argv2 = process.argv;

console.log(argv);
console.log(argv.base);
console.log(argv.limite);

//let parametro = argv[2]; //en 2 por la ´posicion de base en el [argv]
//let base = parametro.split('=')[1]

//console.log(parametro);
//console.log(basse);
//app --base = 12