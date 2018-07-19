const libCrypto = require('originalmy-libcrypto');


const minhaSeedWallet =  libCrypto.createSeedAndWallet("BRAZILIAN-PORTUGUESE", "ExtraEntropy");
const validandoWallet = libCrypto.validateWallet(minhaSeedWallet.seed, minhaSeedWallet.publicKey);
console.log('Criando minha wallet e seed = ', validandoWallet);
// Criando minha wallet e seed =  true

const minhaSeedWalletErrada =  libCrypto.createSeedAndWallet("BRAZILIAN-PORTUGUESE", "ExtraEntropy");
minhaSeedWalletErrada.seed = "mata avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo";
const validandoWalletErrada = libCrypto.validateWallet(minhaSeedWalletErrada.seed, minhaSeedWalletErrada.publicKey);
console.log('Criando minha wallet e seed = ', validandoWalletErrada);
// Criando minha wallet e seed =  false

const minhaSeedWalletErrada2 =  libCrypto.createSeedAndWallet("BRAZILIAN-PORTUGUESE", "ExtraEntropy");
minhaSeedWalletErrada2.publicKey = "mata avestruz milagre substituto inscrever facilitar cruzeiro caber pano fiel ajustar passatempo";
const validandoWalletErrada2 = libCrypto.validateWallet(minhaSeedWalletErrada2.seed, minhaSeedWalletErrada2.publicKey);
console.log('Criando minha wallet e seed = ', validandoWalletErrada2);
// Criando minha wallet e seed =  false