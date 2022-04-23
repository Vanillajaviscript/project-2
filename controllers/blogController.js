const Blog = require('../models/blogSchema');

const seed = (req, res) => {
    Product.deleteMany({}, (err, deletedBlogs) => {
        Product.create(blogSeed, (err, data) => {
        if(err) return res.send(err);
        res.redirect('/blogs');
        });
    });
}
const index = (req, res) => {
    Blog.find({createdAt: -1}, (err, result) => {
        if (err) return res.send(err);
        res.render("index", {blogs: result, title: "All blogs"})
    })
};

const show = (req, res) => {
    const id = req.params.id;
    Blog.findById(id, (err, result) => {
        if (err) return res.render("404", {title: "Blog not found..."});
        res.render("show", {blog: result, title: "Blog Show"});
    });
};

const createGet = (req, res) => {
    res.render('create', {title: 'Create a new blog'});
};

const createPost = (req, res) => {
    const blog = new Blog(req.body);
    blog.save((err, result) => {
        if (err) return res.send(err);
        res.redirect('/blogs');
    });
};

const deleteBlog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id, (err, result) => {
        res.render({redirect: '/blogs'});
    });
};

const editBlog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, (err, result) => {
        res.render('edit', {title: 'Edit a blog'})
    })
}

module.exports = {
    index,
    show,
    createGet,
    createPost,
    deleteBlog,
    seed,
    editBlog
}
