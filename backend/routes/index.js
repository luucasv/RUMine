import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
  res.json({msg: 'check the user route'});
  next();
});

export default indexRouter;
