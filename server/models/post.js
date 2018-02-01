const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  body: {
    type: String,
    required: true,
    minlength: 2,
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

mongoose.model('Post', postSchema);
