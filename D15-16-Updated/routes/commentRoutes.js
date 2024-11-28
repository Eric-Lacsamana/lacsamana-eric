import express from 'express';
import { addComment, getCommentsByBlog, deleteComment } from '../controllers/commentController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/:blogId/blog', authMiddleware, addComment);
router.get('/:blogId/blog', getCommentsByBlog);
router.delete('/:commentId', authMiddleware, deleteComment);

export default router;
