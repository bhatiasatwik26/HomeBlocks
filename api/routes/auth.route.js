import express from 'express';
import { signin, signup, google } from '../controllers/auth.controller.js';

//1) creating router
const router = express.Router();

//2) specifying controllers for sub routes
router.post('/signup', signup);
router.post('/signin', signin)
router.post('/google', google)

export default router;