let CryptoJSUtil = require("crypto-js");

//set the SALT value from command prompt
const SALT = process.env.SALT || "defaultSalt";

//Encryption function
export function encryption(value: string) {
  const cipherText = CryptoJSUtil.AES.encrypt(value, SALT).toString();
  return cipherText;
}

//Decryption function
export function decryption(cipherText: string) {
  const bytes = CryptoJSUtil.AES.decrypt(cipherText, SALT);
  const originalText = bytes.toString(CryptoJSUtil.enc.Utf8);
  return originalText;
}
