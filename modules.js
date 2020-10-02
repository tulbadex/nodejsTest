// const peop = require('./people');
const {people, ages} = require('./people');

//console.log(peop);
console.log(people, ages);

const os = require('os');
//console.log(os);
console.log(os.platform(), os.homedir());
console.log(os.hostname());
console.log(os.type());