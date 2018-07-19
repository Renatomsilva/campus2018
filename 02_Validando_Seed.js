const libCrypto = require('originalmy-libcrypto');
//Code
const minhaSeedCorreta =  libCrypto.validateSeed("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
console.log('Validando minha Seed = ', minhaSeedCorreta);
//Validando minha Seed =  true
//Code
const minhaSeedErrada =  libCrypto.validateSeed("mata avestruz milagre substituto inscrever facilitar cruzeiro caber pano teste ajustar passatempo");
console.log('Validando minha Seed = ', minhaSeedErrada);
//Validando minha Seed =  false