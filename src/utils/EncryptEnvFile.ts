let CryptoJSUtil = require("crypto-js");
let fs = require("fs");
let path = require("path");

//set the SALT value from command prompt
const SALT = process.env.SALT || "defaultSalt";
console.log(`SALT ####### =====> ${SALT}`);
console.log(`ENV ##### ${process.env.ENV}`);
const currentDir = __dirname;
console.log(`current Dir ====> ${currentDir}`);
//Go two level's above(back to src)
const srcDir = path.resolve(currentDir, "..");
console.log(`srcDir ====> ${srcDir}`);
//change to config folder
const configDir = path.resolve(srcDir, "config");
console.log(`configDir ====> ${configDir}`);
const envFilePath = `${configDir}\\.env.userCredentials`;
console.log(`envFilePath ====> ${envFilePath}`);

if (process.env.SALT === "defaultSalt") {
  const envFilePath = `${configDir}\\.env.defaultSALTUser`;
}

console.log(envFilePath);

export function encryptEnvFile() {
  //Read the .env file
  const envFileContent = fs.readFileSync(envFilePath, "utf8");
  const envLines = envFileContent.split("\n");

  // Encrypt values and update the array
  const encryptedLines = envLines.map((line) => {
    const [key, value] = line.split("=");

    if (value) {
      console.log(`SALT ===> ${SALT}`);
      const encryptedValue = CryptoJSUtil.AES.encrypt(value, SALT).toString();
      return `${key}=${encryptedValue}`;
    }

    return line;
  });

  //Join the lines and wright back to the .env file
  const updatedEnvContent = encryptedLines.join("\n");
  fs.writeFileSync(envFilePath, updatedEnvContent, "utf8");

  console.log("Encryption complete, Updated .env file");
}

export function decryptEnvFile() {
  //Read the .env file
  const envFileContent = fs.readFileSync(envFilePath, "utf8");
  const envLines = envFileContent.split("\n");

  // Decrypt values and update the array
  const decryptedLines = envLines.map((line) => {
    const [key, value] = line.split("=");

    if (value) {
      const decryptedValue = CryptoJSUtil.AES.decrypt(value, SALT).toString(
        CryptoJSUtil.enc.Utf8
      );
      return `${key}=${decryptedValue}`;
    }

    return line;
  });

  //Join the lines and wright back to the .env file
  const updatedEnvContent = decryptedLines.join("\n");
  fs.writeFileSync(envFilePath, updatedEnvContent, "utf8");

  console.log("Decryption complete, Updated .env file");
}
