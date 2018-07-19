const seed = require('sha256')("declinar avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
const meuBloco =  require('originalmy-libcrypto').signMessage(seed, "BLOCKSPOT", 2);
console.log('Meu Bloco = ', meuBloco);
// Meu Bloco =  BLOCKSPOT;18qjzqUr6k3igzD5pnFucKCDGryxzUvvV5;IEvBKrxpAe0gi1c4DROw/r/GmlkKtUrjHdM03YDR3hhNWAEzoqagJ1XbrasDlWtNBdvYJmS7YV699rB4mKd7pmY=;722

const seed2 = require('sha256')("testemunha avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo");
const meuBloco2 =  require('originalmy-libcrypto').signMessage(seed2, "BLOCKSPOT", 2);
console.log('Meu Bloco = ', meuBloco2);
// Meu Bloco =  BLOCKSPOT;16qHgBiANkdb25PWssTwTCBTXQoexCJS7B;HzouLsY8kThO4yl9QhOeCClngURNDxQpD9rnkjgjRvzTb83J4VFTF2332k5+YsOVY2pwDyKGlforCl5qBG42fQE=;251

const splitBloco = meuBloco.split(";");
const splitBloco2 = meuBloco2.split(";");

const validandoMensagem = require('originalmy-libcrypto').verifyMessage(splitBloco[1],"BLOCKSPOT",splitBloco[2])
console.log('Validando Mensagem = ', validandoMensagem);
// Validando Mensagem =  true
const validandoMensagem2 = require('originalmy-libcrypto').verifyMessage(splitBloco[1],"BLOCKSPOT",splitBloco2[2])
console.log('Validando Mensagem = ', validandoMensagem2);
// Validando Mensagem =  false