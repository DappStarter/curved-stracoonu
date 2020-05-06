require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift rifle spike equip gloom kiwi swear twice'; 
let testAccounts = [
"0x7e782a18f545c794c0bc3f7d8f31f6d3ac6c787fea72eb6f10cafa2453a3f226",
"0xa9ff2167d9c6d2eba50bbd14df4852e47f7d378d38d8bf6ec97721c52eeb0885",
"0xac5bc44c87afb9fcf374b6f7b3607c28232e2287659d7aec6ac3044631b56ac9",
"0xde089d46bed3b2367783439408797aa9d92ae666ae8ff0bb11e8dd5103929cc4",
"0xa9c2de9f3ce414bc453c0a81a769c73a36f343a9be707b4675bf15fb000c01b6",
"0x613ac889a9372c60b0245f69836b4c5fa90f1d1aedbe3bcf688acf5a7cf4a8b0",
"0x9249e6927c42a18be947c02edbfc3dced6bea1444144a1a7e7eb81b849867d75",
"0x7732b8bfbcdf2a9cdaacd9e64bee56399c1b7abbedf961dd156f9a29ce45bf28",
"0xad14671bb1b7974ca125923b9c71f24b27cb32f43dcf05b0465936ea8e019f78",
"0xbcf9fe5c0f99bcfd53b159531b83f6fe07fb70e47279a7c169a7df7c268269e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
