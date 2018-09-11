const express = require('express');
const { ObjectID } = require('mongodb');
const Post = require('../models/postModel');

const router = new express.Router();

router.get('/', (req, res) => {
  Post.find().then(posts => res.json(posts));
});

router.post('/', (req, res) => {
  const newPost = new Post({
    author: req.body.author || 'Anonymous',
    avatarColor: req.body.avatarColor || 0,
    text: req.body.text,
    timestamp: new Date().getTime()
  });
  return newPost
    .save()
    .then(post => res.json(post))
    .catch(e => res.status(400).send(e));
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  try {
    return Post.findByIdAndUpdate(
      id,
      { $set: { text: req.body.text, author: req.body.author } },
      { new: true },
      (err, post) => {
        if (err) return handleError(err);
        return res.send(post);
      }
    );
  } catch (e) {
    return res.status(400).send(e);
  }
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
