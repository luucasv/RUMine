import express from 'express';
import { saveSize, getLatestSize } from '../controllers/queue_size';
import { database_pass } from '../config.js';
const queueRouter = express.Router();

// not authenticated route

// get latest size
queueRouter.get('/latest', async (req, res) => {
  res.json({success: true, latest_size: await getLatestSize()});
});

// middleware to authenticate and check if token is ok
queueRouter.use(async (req, res, next) => {
  const pass = req.body.pass || req.query.pass || req.headers['x-access-pass'];
  if (!pass) {
    return res.json({
      success: false,
      msg: 'No pass provided.'
    });
  }
  if(pass !== database_pass) {
    return res.status(401).json({
      success: false,
      msg: 'Invalid database password'
    });
  }
  else {
    next();
  }
});

queueRouter.post('/save', async (req, res) => {
  const { size } = req.body;
  await saveSize(size);
  return res.json({success: true})
})

export default queueRouter;
