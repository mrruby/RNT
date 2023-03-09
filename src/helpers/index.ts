import CryptoJS from 'crypto-js';
import {utils} from 'ethers';
import Config from 'react-native-config';
import * as Keychain from 'react-native-keychain';

const derivePrivateKey = async (words: string[]): Promise<string> => {
  const mnemonic = words.join(' ');

  if (!utils.isValidMnemonic(mnemonic)) {
    throw new Error('Invalid mnemonic phrase');
  }
  const mnemonicWallet = utils.HDNode.fromMnemonic(mnemonic);

  return mnemonicWallet.privateKey;
};

export const storePrivateKey = async (words: string[]) => {
  const key = await derivePrivateKey(words);
  const secretKey = Config.SECRET_KEY;
  console.log(key);
  console.log(Config.SECRET_KEY);
  if (secretKey === '' || secretKey === undefined) {
    throw new Error('No secret key provided');
  }

  const encryptedKey = CryptoJS.AES.encrypt(key, secretKey).toString();

  await Keychain.setInternetCredentials('default', 'privateKey', encryptedKey);
};

export const getPrivateKey = async () => {
  try {
    const secretKey = Config.SECRET_KEY;
    if (secretKey === '' || secretKey === undefined) {
      throw new Error('No secret key provided');
    }

    const credentials = await Keychain.getInternetCredentials('default');
    if (!credentials) {
      throw new Error('No credentials stored');
    }
    const encryptedKey = credentials.password;

    // decrypt the key
    const bytes = CryptoJS.AES.decrypt(encryptedKey, Config.SECRET_KEY ?? '');
    const decryptedKey = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedKey;
  } catch (error) {
    console.error('Error getting private key: ', error);
    return null;
  }
};
