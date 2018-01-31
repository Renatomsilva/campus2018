const libCrypto = require('originalmy-libcrypto');
const sha256 = require('sha256')

const seed = sha256("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
const meuBloco =  libCrypto.signMessage(seed, "CAMPUSPARTY2018", 2);
console.log('Meu Bloco = ', meuBloco);
