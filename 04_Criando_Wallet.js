const libCrypto = require('originalmy-libcrypto');


const minhaWalletCerta =  libCrypto.createWallet("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
console.log('Criando minha Wallet = ', minhaWalletCerta);

const minhaWalletErrada =  libCrypto.validateSeedWithLang("mata avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
console.log('Criando minha Wallet = ', minhaWalletErrada);


//Mostrar Exemplo
