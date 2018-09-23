# MERN Social Network

![Build Status](https://travis-ci.com/jm-shi/MERN-Social-Network.svg?branch=master)


A MERN stack social network application with MVP features implemented: user authentication, profile viewing, posting, commenting, and following/unfollowing.

## Demo

[MERN Social Network](https://mern-social-network.herokuapp.com/)

Signup                     |  Feed
:-------------------------:|:-------------------------:
![Signup](https://github.com/jm-shi/MERN-Social-Network/blob/master/demo/signup.png)  |  ![Feed](https://github.com/jm-shi/MERN-Social-Network/blob/master/demo/feed.png)

Comment                    |  Discover
:-------------------------:|:-------------------------:
![Comment](https://github.com/jm-shi/MERN-Social-Network/blob/master/demo/comment.png)  |  ![Discover](https://github.com/jm-shi/MERN-Social-Network/blob/master/demo/discover.png)

Profile                    |  Edit
:-------------------------:|:-------------------------:
![Profile](https://github.com/jm-shi/MERN-Social-Network/blob/master/demo/profile.png)  |  ![Edit](https://github.com/jm-shi/MERN-Social-Network/blob/master/demo/edit.png)


## User Stories

- [x] As a user, I want to be able to create an account so that I can log in.
- [x] As a user, I want to be able to log in so that I can view my home feed.
- [x] As a user, I want to be able to view posts so that I know what people I’m following are up to.
- [x] As a user, I want to be able to create a post so that I can share my current status.
- [x] As a user, I want to be able to delete my posts so that people can no longer see them.
- [x] As a user, I want to be able to edit my posts so that I can correct or clarify my thoughts.
- [x] As a user, I want to be able to like/unlike a post so that I can approve posts I am fond of.
- [x] As a user, I want to be able to comment on a post so that I can share additional thoughts.
- [x] As a user, I want to be able to view other users' profiles so that I can learn more about them.
- [x] As a user, I want to be able to edit my own profile (i.e. change name, avatar color, or bio) so that I can add more style to my page.

### Potential improvements:

- Add option for user to post images
- Add option for user to change their avatar/background to a custom image
- Add social media login options (e.g. Facebook, Google, Twitter)
- Implement find users feature (i.e. find users by typing their name into a search field)
- Improve code organization
- Write more tests

## Built With

- [Express.js](https://expressjs.com/) - Backend web framework
- [Heroku](http://heroku.com/) - Platform to deploy web applications
- [JSON Web Token](https://jwt.io/) - A standard to securely authenticate HTTP requests
- [Material-UI](https://material-ui.com/) - UI library for React
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - Object-modeling tool for Node.js
- [Node.js](https://nodejs.org/en/) - Runtime environment to help build fast server applications
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - JavaScript library to help better manage application state

## Acknowledgments

- Design was inspired by preexisting projects like Qolzam's [React Social Network](https://github.com/red-gold/react-social-network) and Shama Hoque's [Mern Social](https://github.com/shamahoque/mern-social).
- Authentication was implemented with the help of Krunal Lathiya's [example](https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#React_Redux_Node_MongoDB_JWT_Authentication), Brad Traversy's [guide](https://www.youtube.com/watch?v=Z1ktxiqyiLA) on building a login system, and Maximilian Schwarzmüller's [guide](https://www.youtube.com/watch?v=0D5EEKH97NA) on JWT (primarily episodes 11 and 12).
- Restful CRUD API builds on concepts explained in Andrew Mead's [Node.js course](https://www.udemy.com/the-complete-nodejs-developer-course-2/).
- [Material-UI](https://material-ui.com/getting-started/installation/), [React](https://reactjs.org/docs/getting-started.html), [Redux](https://redux.js.org/introduction), [Mongoose](https://mongoosejs.com/docs/guide.html) documentation.
