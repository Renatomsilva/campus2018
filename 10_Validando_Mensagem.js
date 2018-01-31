const libCrypto = require('originalmy-libcrypto');
const sha256 = require('sha256')

const seed = sha256("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
const meuBloco =  libCrypto.signMessage(seed, "CAMPUSPARTY2018", 2);
console.log('Meu Bloco = ', meuBloco);


const seed2 = sha256("testemunha avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
const meuBloco2 =  libCrypto.signMessage(seed2, "CAMPUSPARTY2018", 2);
console.log('Meu Bloco = ', meuBloco2);


const splitBloco = meuBloco.split(";");
const splitBloco2 = meuBloco2.split(";");

const validandoMensagem = libCrypto.verifyMessage(splitBloco[1],"CAMPUSPARTY2018",splitBloco[2])
console.log('Validando Mensagem = ', validandoMensagem);

const validandoMensagem2 = libCrypto.verifyMessage(splitBloco2[1],"CAMPUSPARTY2018",splitBloco2[2])
console.log('Validando Mensagem = ', validandoMensagem2);

const validandoMensagem3 = libCrypto.verifyMessage(splitBloco2[1],"CAMPUSPARTY2018",splitBloco[2])
console.log('Validando Mensagem = ', validandoMensagem3);

const validandoMensagem4 = libCrypto.verifyMessage(splitBloco[1],"CAMPUSPARTY2017",splitBloco2[2])
console.log('Validando Mensagem = ', validandoMensagem4);

