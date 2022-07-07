import express from 'express';

import { getPosts } from '../controllers/posts.js';

const router=express.Router();

// localhost:5000/posts/ and not localhost:5000/ =>app.use('/posts',postRoutes); in index.js
router.get('/', getPosts);

export default router;