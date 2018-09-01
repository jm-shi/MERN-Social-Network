const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

let dbURI = process.env.REACT_APP_DB_URI;
/* eslint-disable global-require, prefer-destructuring */
if (dbURI === undefined) {
  dbURI = require('./secrets').dbURI;
}
/* eslint-enable global-require, prefer-destructuring */
const Post = require('./models/post');

const app = express();
const router = express.Router();

const port = process.env.PORT || 5000;

mongoose
  .connect(
    dbURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

router.get('/', (req, res) => {
  res.json({ message: 'Hi there' });
});

router.get('/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: posts });
  });
});

router.post('/posts', (req, res) => {
  const post = new Post();
  const { text } = req.body;
  if (!post) {
    return res.json({
      success: false,
      error: 'Your post must contain text'
    });
  }
  post.text = text;
  post.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use('/test', router);

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
  console.log('***', dbURI);
});
