import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

const addComment = async (req, res) => {
    try {
        const { blogId } = req.params;
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        const comment = await Comment.create({
            content,
            author: req.user._id,
            blog: blogId,
        });

        blog.comments.push(comment._id);
        await blog.save();
        res.status(201).json(comment);
    } catch (error) {
        console.error('Error adding comment:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const getCommentsByBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const comments = await Comment.find({ blog: blogId })
            .populate('author', 'name')
            .sort({ createdAt: -1 });

        if (!comments.length) {
            return res.status(404).json({ error: 'No comments found for this blog' });
        }

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error retrieving comments:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        if (comment.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'Unauthorized action' });
        }

        await comment.deleteOne();
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Error deleting comment:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

export { addComment, getCommentsByBlog, deleteComment };
