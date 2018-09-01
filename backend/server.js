import bodyParser from 'body-parser';
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
  res.json({ message: 'Hi there' });
});

app.use('/test', router);

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
