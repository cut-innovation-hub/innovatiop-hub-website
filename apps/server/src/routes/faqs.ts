/* eslint-disable prefer-const */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { requireUserSignIn } from '../middleware/auth';
import { Faq } from '../models/Faqs';
import { User } from '../models/User';
const router = express.Router();

router.post('/create', requireUserSignIn, async (req, res, next) => {
  try {
    // @ts-ignore
    const logged_in_user = req.user;
    const { question, solution } = req.body;

    const _user = await User.findOne({ _id: logged_in_user._id });

    if (!question || !solution) {
      return res.status(500).send({ message: 'Please enter all fields' });
    }

    if (!_user.approved) {
      return res.status(403).send({ message: 'Account not approved' });
    }

    const new_faq = new Faq({
      question: question,
      solution: solution,
      creator: _user._id,
    });

    const saved_faq = new_faq.save();

    return res.status(200).send({ message: 'Faq saved', faq: saved_faq });
  } catch (error) {
    next(error);
  }
});

// get all faqs
// get request
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
            { question: { $regex: req.query.keyword, $options: 'i' } },
            { solution: { $regex: req.query.keyword, $options: 'i' } },
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

    let total = await Faq.countDocuments(query);

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

    let faqs = await Faq.aggregate(query);

    return res.status(200).send({
      message: 'faqs fetched sucessfully',
      length: faqs.length,
      meta: {
        total: total,
        currentPage: page,
        perPage: perPage,
        totalPages: Math.ceil(total / perPage),
      },
      faqs: faqs,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
