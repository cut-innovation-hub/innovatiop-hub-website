import express from 'express';
import { News } from '../models/News';
const router = express.Router();

// create news
// post request
router.post('/create', (req, res, next) => {
  try {
    const { heading, description, sub_heading, main_pic, gallery } = req.body;

    if (!heading) {
      return res.status(400).send({ message: 'Please enter a heading' });
    }
    if (!description) {
      return res.status(400).send({ message: 'Please enter description' });
    }

    const newNews = new News({
      heading,
      sub_heading,
      main_pic,
      gallery,
    });

    const saved_news = newNews.save();

    return res.status(200).send({ message: 'News Saved', news: saved_news });
  } catch (error) {
    next(error);
  }
});

// get single news
// get request
router.get('/single', (req, res, next) => {
  try {
    console.log('get single news');
  } catch (error) {
    next(error);
  }
});

router.get('/all', (req, res, next) => {
  try {
    console.log('get all news');
  } catch (error) {
    next(error);
  }
});

export default router;
