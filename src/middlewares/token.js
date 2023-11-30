import { verify } from 'jsonwebtoken';
require("dotenv").config();

export async function getAuthorization(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }
}

export async function verifyToken(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.log("Token Expired!")

        return res.status(200).json({
          success: false,
          message: 'Token is not valid',
          error: err.toString()
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(200).json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
}

export async function verifyTokenUpload(token, key) {
  return await verify(token, key, async (err, authData) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
}
