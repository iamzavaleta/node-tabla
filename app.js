
// import {writeFile} from 'fs';



const {createFile} = require('./helpers/multiplicar');

const argv = require('./config/yargs');

require('colors')

console.clear()

console.log(argv)


console.log(`base-yargs : ${argv.base}`)
console.log(`list-yargs : ${argv.list}`)
console.log(`hasta-yargs : ${argv.hasta}`)

const base = argv.base;
const lista = argv.list;
const hasta = argv.hasta;


createFile(base, lista, hasta)
    .then( nameFile => console.log(nameFile.yellow, 'created!'.rainbow))
    .catch( err => console.log(err));
