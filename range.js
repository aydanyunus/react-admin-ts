const db = require('./db.json');

module.exports = (req, res, next) => {
  const totalPosts = db.posts.length;
  res.header('Access-Control-Expose-Headers', 'Content-Range, X-Total-Count');
  res.header('Content-Range', `posts 0-${totalPosts - 1}/${totalPosts}`);
  res.header('X-Total-Count', totalPosts);
  next();
};