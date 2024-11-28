import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// Import Routes
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import commentRoutes from './routes/commentRoutes.js';


const port = process.env.PORT || 3000;

dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors())
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);

// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
// Start the server
app.listen(port, ()=>{
    console.log(`Server is running in port ${port}`)
    connectToDatabase();
});