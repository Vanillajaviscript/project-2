const Blog = require('../models/blogSchema');
const blog = require('../models/blogSeed');

const seed = (req, res) => {
    Blog.deleteMany({}, (err, deletedBlogs) => {
        Blog.create(blogSeed, (err, data) => {
        if(err) return res.send(err);
        res.redirect('/blogs');
        });
    });
}
const index = (req, res) => {
    Blog.find({}, (err, result) => {
        if (err) return res.send(err);
        console.log(result);
        res.render("index", {blogs: result, title: "All blogs"})
    })
};

const show = (req, res) => {
    Blog.findById(req.params.id, (err, result) => {
        // if (err) return res.render("404", {title: "Blog not found..."});
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
    Blog.findByIdAndDelete(req.params.id, (err, result) => {
        res.redirect('/blogs');
    });
};

const editBlog = (req, res) => {
    Blog.findById(req.params.id, (err, editedBlog) => {
        if(err) return res.send(err);
        res.render('edit', {blog: editedBlog});
    })
}

//Update blog
const update = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, (err, updatedBlog) => {
        if(err) return res.send(err);
        res.redirect(`/blogs/${req.params.id}`);
    })
}


module.exports = {
    index,
    show,
    createGet,
    createPost,
    deleteBlog,
    seed,
    editBlog,
    update
}