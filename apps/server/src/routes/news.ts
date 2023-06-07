/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
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
      description,
    });

    const saved_news = newNews.save();

    return res.status(200).send({ message: 'News Saved', news: saved_news });
  } catch (error) {
    next(error);
  }
});

// get single news
// get request
router.get('/single',async (req, res, next) => {
  try {
    const {id} = req.query
    const news = await News.findOne({_id: id})

    return res.status(200).send({message: 'News item found', news: news})

  } catch (error) {
    next(error);
  }
});

router.get('/all', async (req, res, next) => {
  try {
    // handling store schema
    const query = [];
    // handling search queries
    if (req.query.keyword && req.query.keyword != '') {
      query.push({
        //@ts-ignore
        $match: {
          $or: [
            { heading: { $regex: req.query.keyword, $options: 'i' } },
            { description: { $regex: req.query.keyword, $options: 'i' } },
            {
              sub_heading: { $regex: req.query.keyword, $options: 'i' },
            },
          ],
        },
      });
    }

    // handling sort
    if (req.query.sortBy && req.query.sortOrder) {
      let sort = {};
      //@ts-ignore
      sort[req.query.sortBy] = req.query.sortOrder == 'asc' ? 1 : -1;
      query.push({
        //@ts-ignore
        $sort: sort,
      });
    } else {
      query.push({
        //@ts-ignore
        $sort: { createdAt: -1 },
      });
    }
    let total = await News.countDocuments(query);
    //@ts-ignore
    let page = req.query.page ? parseInt(req.query.page) : 1;
    //@ts-ignore
    let perPage = req.query.perPage ? parseInt(req.query.perPage) : 16;
    let skip = (page - 1) * perPage;

    query.push({
      //@ts-ignore
      $skip: skip,
    });
    query.push({
      //@ts-ignore
      $limit: perPage,
    });

    let news = await News.aggregate(query);

    return res.status(200).send({
      message: 'News fetched sucessfully',
      length: news.length,
      meta: {
        total: total,
        currentPage: page,
        perPage: perPage,
        totalPages: Math.ceil(total / perPage),
      },
      news: news,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
