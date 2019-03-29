const opt = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Genera un archivo con la tabla del multipicar', opt)
    .help() //da informacion de la funcion 
    .argv;

module.exports = {
    argv
}







//  --flat es diferente que algo sin --
//esta es la configuracion larga 
/*
const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).command('crear', 'Genera un archivo con la tabla del multipicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() //da informacion de la funcion 
    .argv;

//base y limite son flats --base
*/