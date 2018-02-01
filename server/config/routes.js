const Blog = require('../controllers/blog');

module.exports = (app) => {
  app.get('/api/test', (req, res) => {
    Blog.test(req, res);
  });

  app.get('*', (req, res) => {
    Blog.main(req, res);
  });
};
