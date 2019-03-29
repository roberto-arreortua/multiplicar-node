//requireds
const fs = require('fs');


let listarTabla = (base, limite = 20) => {

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }
}




let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += (`${base} x ${i} = ${i*base}\n`);
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject('no se pudo crear')
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

}

//exportamos este archivo como un modulo

module.exports = {
    crearArchivo,
    listarTabla
}