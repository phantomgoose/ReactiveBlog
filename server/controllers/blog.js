const User = require('mongoose').model('User');
const Post = require('mongoose').model('Post');
const Comment = require('mongoose').model('Comment');
const path = require('path');

module.exports = {
  main: (req, res) => {
    res.sendFile('/client/build/index.html', {
      root: path.join(__dirname, '../../'),
    });
  },
  createPost: (req, res) => {},
  updatePost: (req, res) => {},
  deletePost: (req, res) => {},
  listPosts: (req, res) => {},
  test: async (req, res) => {
    try {
      const testUser = await new User({
        name: `Alex${Math.random(1000)}`,
      }).save();
      res.json({ status: 'success', response: testUser });
    } catch (err) {
      res.json({ status: 'error', response: err });
    }
  },
};
