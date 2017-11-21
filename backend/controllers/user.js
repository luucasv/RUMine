import User from '../models/user'
import bcrypt from 'bcryptjs'

const saltRounds = 10;

export const findUserByUsername = async (username) => {
  let user = await User.findOne({username: username}).exec();
  return user;
}

const exists = async (query) => {
  let user = await User.findOne(query).exec();
  return user;
}

export const createUser = async (user) => {
  let new_user = new User ({
    username: user.username,
    password: bcrypt.hashSync(user.password, saltRounds),
    cpf:      user.cpf,
    email:    user.email,
    balance:  0.0
  });

  if (await exists({username: new_user.username})) {
    return { succes: false, msg: 'Username already exist!' };
  } else if (await exists({ email: new_user.email })) {
    return { succes: false, msg: 'Email already exist!' };
  } else if (await exists({ cpf: new_user.cpf })) {
    return { succes: false, msg: 'Cpf already exist!' };    
  }

  await new_user.save();

  return { success: true };
}

export const checkPassword = async (username, password) => {
  let user = await findUserByUsername(username);
  if (user) {
    return bcrypt.compareSync(password, user.password);
  } else {
    return false;
  }
}

export const getBalance = async (username) => {
  let user = await findUserByUsername(username);
  return user.balance;
}

export const changeBalance = async (username, amount) => {
  if (!amount) {
    return { succes: false, msg: 'No amount provided.' };
  }
  let user = await User.findOneAndUpdate({
    username: username,
    balance: { $gte: -amount }
  },
  {
    $inc: { balance: amount }
  }).exec();
  if (user) {
    return { succes: true, msg: 'Account balance updated!', newBalance: user.balance };
  }
}
