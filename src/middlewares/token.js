import  jsonwebtoken  from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

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
    jsonwebtoken.verify(token, process.env.SECRET, (err, decoded) => {
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


export function generateToken(user) {

  return jsonwebtoken.sign({
      _id: user._id,
      role: user.role,
  }, process.env.SECRET,{ expiresIn: '1h' });
}