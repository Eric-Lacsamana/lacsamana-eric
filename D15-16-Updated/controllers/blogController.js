import Blog from '../models/Blog.js';

// Create a new blog post
const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        const blog = await Blog.create({ title, content, author: req.user._id });
        res.status(201).json(blog);
    } catch (error) {
        console.log('error', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all blog posts
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a blog post by ID
const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id).populate('author', 'name').populate({
            path: 'comments',
            populate: {
                path: 'author',
                select: 'name'
            }
        });
        if (!blog) return res.status(404).json({ error: 'Blog not found' });

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }

        const blog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });

        if (blog.author._id.toString() !== req.user._id) return res.status(403).json({ error: 'Unauthorize Error' });

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;


        const blog = await Blog.findById(id).populate('author', 'name');
        console.log('test', blog, id);
        
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        if (blog.author._id.toString() !== req.user._id) return res.status(403).json({ error: 'Unauthorize Error' });


        await Blog.findByIdAndDelete(id);

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {

        res.status(500).json({ error: 'Server error' });
    }
}


export {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
};