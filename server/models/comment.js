const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
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

mongoose.model('Comment', commentSchema);
