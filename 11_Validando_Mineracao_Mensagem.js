const libCrypto = require('originalmy-libcrypto');
const sha256 = require('sha256')

const seed = sha256("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
const meuBloco =  libCrypto.signMessage(seed, "CAMPUSPARTY2018", 2);
console.log('Meu Bloco = ', meuBloco);

const validandoMensagem = libCrypto.checkMinedMessage("CAMPUSPARTY2018", 2, meuBloco)
console.log('Validando Mensagem = ', validandoMensagem);

const validandoMensagem2 = libCrypto.checkMinedMessage("CAMPUSPARTY2017", 2, meuBloco)
console.log('Validando Mensagem = ', validandoMensagem2);

const validandoMensagem3 = libCrypto.checkMinedMessage("CAMPUSPARTY2018", 3, meuBloco)
console.log('Validando Mensagem = ', validandoMensagem3);
