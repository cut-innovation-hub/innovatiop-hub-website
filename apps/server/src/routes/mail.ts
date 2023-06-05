/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
const router = express.Router();

// create a mail
// post request
// /api/mail/post
router.post('/create', (req, res, next)=>{
    try {
        console.log("create newas hwere")
    } catch (error) {
        next(error)
    }
})

export default router