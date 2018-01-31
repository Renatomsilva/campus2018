const libCrypto = require('originalmy-libcrypto');


const minhaSeedWallet =  libCrypto.createSeedAndWallet("BRAZILIAN-PORTUGUESE", "ExtraEntropy");
console.log('Criando minha wallet e seed = ', minhaSeedWallet);
