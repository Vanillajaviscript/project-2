const express = require('express');
const blogController = require('../controllers/blogController');
const blogRouter = express.Router();

blogRouter.get('/create', blogController.createGet);
blogRouter.get('/', blogController.index);
blogRouter.post('/', blogController.createPost);
blogRouter.get('/:id', blogController.show);
blogRouter.delete('/:id', blogController.deleteBlog);

module.exports = blogRouter;