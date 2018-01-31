const libCrypto = require('originalmy-libcrypto');
const sha256 = require('sha256')

const seedCorreta = sha256("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
const minhaWalletCerta =  libCrypto.createWalletFromSHA(seedCorreta);
console.log('Criando minha Wallet = ', minhaWalletCerta);

//Mostrar Exemplo
