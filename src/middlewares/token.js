import  jsonwebtoken  from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

export async function verifyToken(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    jsonwebtoken.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.log("Token Expired!")

        return res.status(400).json({
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
    return res.status(400).json({
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