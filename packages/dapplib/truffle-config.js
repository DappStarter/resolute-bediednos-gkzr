require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain erosion good enroll flip swing'; 
let testAccounts = [
"0x40e42af8e908812e2585a3dcd43deefc429f9d25eb48e6bb6231ae6c8221b8a5",
"0xe812fc0fca5f7b7b24293a8cff7e0b1b757441c387bfdcd4d3b06a4535966b81",
"0x8bbee305d1bd7adf3bb8248cd83e80e6adff3be883207fd8866dce2780936e5d",
"0xacf433d80b2cb8bb9161048530f2c5c4a0e15286a9b74f3993112f134334b264",
"0x6dfad7727524ff2b1d54e7c2e746a055648a26749a6e9c2bfc6a4c09c1e99320",
"0xe459b520e5af6a200329bfaef158770290aef66f4485a9f114cb4b3c914b3a60",
"0x970ada20fd5554fff21986ec234f3383b0248916e2f32765b20272660f8f0489",
"0x1bb44015202641779a5244eca3760bfd62ba7efa6e3e855300440cb2e18ea98f",
"0x65bc2be42a2f52dea81be38932203c0b233ef204f0ef2dc20251f3df8cb6407a",
"0x76ea7408a53a11c436128c3309782b628ff4dc6b1fd77047d04267612a77125d"
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
            version: '^0.8.0'
        }
    }
};

