import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

// routers
import indexRouter from './routes/index';
import userRouter from './routes/user';

// config
import { secret, database } from './config'
const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(database, { useMongoClient: true });

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// setting routers
app.use('/', indexRouter);
app.use('/users', userRouter);

const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

export default app;