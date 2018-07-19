const libCrypto = require('originalmy-libcrypto');
const sha256 = require('sha256')

const seed = sha256("assinatura corrigir primo aparar todos aluguel educar talentoso algo atirar oliveira arejado");
const meuBloco =  libCrypto.signMessage(seed, "834896944f63955ecfe7ff9e838fd549bcfb2d811c554462505e2d11b93e15c8", 2);
console.log('Meu Bloco = ', meuBloco);

// Meu Bloco =  BLOCKSPOT;18qjzqUr6k3igzD5pnFucKCDGryxzUvvV5;IEvBKrxpAe0gi1c4DROw/r/GmlkKtUrjHdM03YDR3hhNWAEzoqagJ1XbrasDlWtNBdvYJmS7YV699rB4mKd7pmY=;722
