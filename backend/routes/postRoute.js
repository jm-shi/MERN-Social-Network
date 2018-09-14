const express = require('express');
const { ObjectID } = require('mongodb');
const Post = require('../models/postModel');

const router = new express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

router.post('/', async (req, res) => {
  const newPost = new Post({
    author: req.body.author || 'Anonymous',
    authorId: req.body.authorId,
    avatarColor: req.body.avatarColor || 0,
    text: req.body.text,
    timestamp: new Date().getTime()
  });
  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
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

router.delete('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const post = await Post.findById(req.params.id);
    await post.remove();
    return res.json({ success: true });
  } catch (err) {
    return res.status(404).send(err);
  }
});

module.exports = router;
