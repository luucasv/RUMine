import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

// routers
import indexRouter from './routes/index';
import userRouter from './routes/user';
import queueRouter from "./routes/queue_size";

// config
import { secret_string, database_link } from './config'
const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(database_link, { useMongoClient: true });

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// setting routers
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/queue_size', queueRouter);

const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

export default app;