const libCrypto = require('originalmy-libcrypto');
const minhaSeedWallet =  libCrypto.createSeedAndWallet("BRAZILIAN-PORTUGUESE", "ExtraEntropy");
console.log('Criando minha wallet e seed = ', minhaSeedWallet);
// Criando minha wallet e seed =  Wallet {
//   message: 'ok',
//   success: true,
//   publicKey: '18DtQJ2cZrj7ZXuqXMDYGC9QaY5ueE2nXP',
//   seed: 'identificado maravilha melodia curto tambor nota cadete perna melancolia comida atividade ordenado' }