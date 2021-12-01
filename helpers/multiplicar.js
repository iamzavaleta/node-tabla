
const fs = require('fs');

const colors = require('colors');

const createFile = async( base = 5, lista = false, hasta = 10) =>{

    try {
        
        let salida = '';

        for(let i = 1; i <=hasta; i++){
            salida = salida + `${base} x ${i} = ${base * i}\n`;
        }

        if(lista){
           
            console.log('=================')
            console.log(`   TABLA DEL ${base}    `)
            console.log('=================')

            console.log(colors.cyan(salida));

        }
        
        fs.writeFileSync(`./salida/table-${base}.txt`, salida);

        return 'The file has been created!';

    } catch (err) {
        throw err
    }

}

module.exports = {
    createFile
}