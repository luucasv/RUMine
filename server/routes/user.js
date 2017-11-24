import express from 'express';
import { createUser, getBalance, changeBalance, checkPassword } from '../controllers/user';
import { authenticate, validateToken } from '../controllers/auth';
import { processEntry } from "../controllers/turnstile_log";

const userRouter = express.Router();

// not authenticated route

// register user
userRouter.post('/register', async (req, res) => {
  const {username, password, email, cpf} = req.body;
  if (!username || !password || !email || !cpf) {
    return res.json({ 
      success: false,
      msg: 'Missing something'
    });
  }
  let user = {
    username: username,
    password: password,
    email:    email,
    cpf:      cpf
  };
  let ans = await createUser(user);
  return res.json(ans);
});

// get token
userRouter.post('/auth', async (req, res) => {
  const {username, password} = req.body;
  if (!username || !password) {
    return res.json({
      success: false,
      msg: 'Missing username or password'
    });
  }
  let ans = await authenticate(username, password);
  return res.json(ans);
});

userRouter.post('/entry', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      success: false,
      msg: 'Missing username or password'
    });
  }
  let valid = await checkPassword(username, password);
  if (!valid) {
    return res.json({
      success: false,
      msg: 'Invalid username or password'
    });
  } else {
    return res.json( await processEntry(username) );
  }
});

// middleware to authenticate and check if token is ok
userRouter.use(async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.json({
      success: false,
      msg: 'No Token provided.'
    });
  }
  let ans = await validateToken(token);
  if (!ans.success) {
    return res.status(401).json(ans);
  } else {
    req.decode = ans.decode;
    next();
  }
});

// get user balance
userRouter.get('/balance', async (req, res) => {
  res.json({success: true, balance: await getBalance(req.decode.username)});
});

// update balance
userRouter.put('/balance', async (req, res) => {
  res.json(await changeBalance(req.decode.username, req.body.amount));
});

export default userRouter;
