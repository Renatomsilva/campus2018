//Code
const libCrypto = require('originalmy-libcrypto');


const minhaSeedCorreta =  libCrypto.validateSeedWithLang("BRAZILIAN-PORTUGUESE", "declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
console.log('Validando minha Seed = ', minhaSeedCorreta);
//Validando minha Seed =  true

const minhaSeedErrada =  libCrypto.validateSeedWithLang("ENGLISH", "mata avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
console.log('Validando minha Seed = ', minhaSeedErrada);
//Validando minha Seed =  false

