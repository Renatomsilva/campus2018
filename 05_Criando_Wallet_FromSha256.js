const libCrypto = require('originalmy-libcrypto');
const sha256 = require('sha256')

const seedCorreta = sha256("necessidade andar panfleto suporte surpreender triste mergulho motor envolvido presente imune dunas");
console.log(seedCorreta)
const minhaWalletCerta =  libCrypto.createWalletFromSHA(seedCorreta);
console.log('Criando minha Wallet = ', minhaWalletCerta);

// Wallet {
//   message: 'ok',
//   success: true,
//   publicKey: '18qjzqUr6k3igzD5pnFucKCDGryxzUvvV5' }




var LibCrypto = require('originalmy-libcrypto');

var seed2 = LibCrypto.createWallet('interruptor drama pedra definir equipe alimentado brecha crescer queijo fornecem lamento pobreza');
console.log(seed2)
