import { checkPassword } from './user';
import { secret_string } from '../config';
import jwt from 'jsonwebtoken';

export const authenticate = async (username, password) => {
  if (!username || !password) {
    return {
      success: false,
      msg: 'Missing username or password'
    };
  }
  let success = await checkPassword(username, password);
  if (success) {
    return {
      success: true,
      msg: 'Authentication ok, valid token generated!',
      token: await genToken({username: username})
    };
  } else {
    return {
      success: false,
      msg: 'Invalid username or password!'
    };
  }
}

export const genToken = async (data) => {
  return jwt.sign(data, secret_string, { expiresIn: '1h' });
};

export const validateToken = async (token) => {
  if (token) {
    let decode;
    try{
      decode = jwt.verify(token, secret_string);
    } catch(err) {
      if (err.name == 'TokenExpiredError') {
        return {success: false, msg: 'Token Expired!'};
      } else {
        return {success: false, msg: 'Invalid Token!'};
      }
    }
    return {success: true, decode: decode};
  } else {
    return { success: false, msg: 'No Token provided.'};
  }
}