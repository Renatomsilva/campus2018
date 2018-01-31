const libCrypto = require('originalmy-libcrypto');

const minhaSeedCorreta =  libCrypto.validateSeed("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
console.log('Validando minha Seed = ', minhaSeedCorreta);

const minhaSeedErrada =  libCrypto.validateSeed("mata avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
console.log('Validando minha Seed = ', minhaSeedErrada);
