
const argv = require('yargs')
    .option('b',{
        alias : 'base',
        type : 'number',
        demandOption: true,
        describe: 'Es la base que quiers multiplicar' 
    })
    .option('l',{
        alias : 'list',
        type : 'boolean',
        default: false,
        describe: 'Muestra la tabla listada'
    })
    .option('h', {
        alias : 'hasta',
        type : 'number',
        default : 10,
        describe : 'Hasta donde desea multiplicar'
    })
    .check((argv, options) => {
        if( isNaN(argv.b)){
            throw 'La base no es un numero'
        }
        if( isNaN(argv.h)){
            throw 'La variable hasta donde desea multiplicar no es un numero'
        }
        return true;
    })
    .argv;


module.exports = argv;