const express = require('express');
const blogController = require('../controllers/blogController');
const blogRouter = express.Router();

blogRouter.get('/seed', blogController.seed);
blogRouter.get('/create', blogController.createGet);
blogRouter.get('/', blogController.index);
blogRouter.post('/', blogController.createPost);
blogRouter.get('/:id', blogController.show);
blogRouter.delete('/:id', blogController.deleteBlog);
blogRouter.put('/:id', blogController.editBlog);

module.exports = blogRouter;