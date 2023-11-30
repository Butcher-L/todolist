import { sign } from 'jsonwebtoken';
require("dotenv").config();

export function generateToken(user) {

    return sign({
        _id: user._id,
        role: user.role,
    }, process.env.SECRET,{ expiresIn: '1h' });
}
