const libCrypto = require('originalmy-libcrypto');


const minhaSeed =  libCrypto.createSeed("BRAZILIAN-PORTUGUESE", "ExtraEntropy");
console.log('Criando minha wallet = ', minhaSeed);
