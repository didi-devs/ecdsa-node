const { secp256k1 } = require("@noble/curves/secp256k1");
const { bytesToHex } = require("@noble/hashes/utils");
const { keccak_256 } = require("@noble/hashes/sha3");

// Generate a private key
const privateKey = secp256k1.utils.randomPrivateKey();
console.log("Private Key:", bytesToHex(privateKey));

const publicKey = secp256k1.getPublicKey(privateKey, false).slice(1);
console.log("public Key:", bytesToHex(publicKey))

const hashedPublicKey = keccak_256(publicKey)

const address = "0x" + bytesToHex(hashedPublicKey.slice(-20));
console.log("Ethereum Address:", address);


