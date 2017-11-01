import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
  res.json({msg: 'ta funcionando porra'});
  next();
});

export default indexRouter;
