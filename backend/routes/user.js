import express from 'express';
import { createUser, getBalance } from '../controllers/user';
import { authenticate, validateToken } from '../controllers/auth';

const userRouter = express.Router();

// not authenticated route

// register user
userRouter.post('/register', async (req, res) => {
  const {username, password, email, cpf} = req.body;
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
  let ans = await authenticate(username, password);
  return res.json(ans);
});

// midleware to authenticate and check if token is ok

userRouter.use(async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  let ans = await validateToken(token);
  if (!ans.success) {
    return res.status(401).json(ans);
  } else {
    req.decode = ans.decode;
    next();
  }
});

userRouter.get('/balance', async (req, res) => {
  res.json({success: true, balace: await getBalance(req.decode.username)});
})

export default userRouter;
