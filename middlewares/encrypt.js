import dotenv from 'dotenv'

dotenv.config();
import { createCipheriv, createDecipheriv } from 'crypto';
const algorithm = process.env.ALGORITHM;
const password = process.env.PASSWORD;
const
  // do not use a global iv for production,
  // generate a new one for each encryption
  iv = process.env.IV;

export function encrypt(text) {
  var cipher = createCipheriv(algorithm, password, iv);
  var encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export function decrypt(encrypted) {
  var decipher = createDecipheriv(algorithm, password, iv);
  var dec = decipher.update(encrypted, "hex", "utf8");
  return dec;
}

