const { secp256k1 } = require("@noble/curves/secp256k1");
const { bytesToHex } = require("@noble/hashes/utils");

// Generate a private key
const privateKey = secp256k1.utils.randomPrivateKey();

console.log("Private Key:", bytesToHex(privateKey));
