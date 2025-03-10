import server from "./server";

import * secp from 'ethereum-cryptography/secp256k1';

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey); 
    const address = secp.getPublicKey(privateKey);
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
         Private Key
        <input placeholder="Type a Private Key" value={address} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
