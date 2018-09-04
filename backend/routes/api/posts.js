const express = require('express');
const Post = require('../../models/post');

const router = new express.Router();

router.get('/', (req, res) => {
  Post.find().then(posts => res.json(posts));
});

router.post('/', (req, res) => {
  const newPost = new Post({
    text: req.body.text,
    author: 'no author assigned'
  });

  return newPost
    .save()
    .then(post => res.json(post))
    .catch(e => res.status(400).send(e));
});

router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post =>
      post.remove().then(() =>
        res.json({
          success: true
        })))
    .catch(e => res.status(404).send(e));
});

module.exports = router;
