const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const validateLogin = require('../validation/validateLogin');
const validateSignup = require('../validation/validateSignup');
const User = require('../models/userModel');

const router = new express.Router();

// User route implementation based on Maximilian Schwarzmüller's guide:
// https://www.youtube.com/watch?v=0D5EEKH97NA

router.post('/signup', (req, res, next) => {
  const { errors, isValid } = validateSignup(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length > 0) {
        return res.status(409).json({ error: 'Email already exists.' });
      }
      return bcrypt.hash(req.body.password, 10, (error, hash) => {
        if (error) {
          return res.status(500).json({ error });
        }
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          passwordConfirm: hash,
          avatarColor: Math.floor(Math.random() * 18) + 1
        });
        return newUser
          .save()
          .then((result) => {
            res.status(201).json({ result });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      });
    });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          email: 'Could not find email.'
        });
      }
      return bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed.'
          });
        }
        if (result) {
          console.log('user', user);
          const token = jwt.sign(
            {
              avatarColor: user.avatarColor,
              name: user.name,
              email: user.email,
              userId: user._id
            },
            process.env.REACT_APP_JWT_KEY || require('../secrets').jwtKey,
            {
              expiresIn: '1h'
            }
          );
          return res.status(200).json({
            message: 'Auth successful.',
            token
          });
        }
        return res.status(401).json({
          password: 'Wrong password. Try again.'
        });
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.patch('/profile/:id', (req, res) => {
  const { id } = req.params;

  try {
    User.findOneAndUpdate(
      { _id: id },
      {
        $set: { bio: req.body.bio, email: req.body.email, name: req.body.name }
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err) => {
        if (err != null && err.name === 'MongoError' && err.code === 11000) {
          return res
            .status(500)
            .send({ message: 'This email is already in use.' });
        }
      }
    ).then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      return res.json({ user });
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/:id', (req, res) => {
  User.remove({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).json({ message: 'Successfully deleted user.' });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
