const express = require('express');
const Post = require('../../models/post');

const router = new express.Router();

router.get('/', (req, res) => {
  Post.find().then(posts => res.json(posts));
});

router.post('/', (req, res) => {
  const newPost = new Post({
    text: req.body.text,
    author: req.body.author
  });

  if (!newPost.text.trim() || !author) {
    return res.json({
      error: 'Post is either empty or lacks an author.'
    });
  }

  return newPost.save().then(post => res.json(post));
});

router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post =>
      post.remove().then(() =>
        res.json({
          success: true
        })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
