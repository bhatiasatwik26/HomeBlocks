import express from 'express';

const router = express.Router();

router.get('/demo', (req, res)=>{ 
    res.send('Hi');
});

export default router;