/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { Mail } from '../models/Mail';
const router = express.Router();

// create a mail
// post request
// /api/mail/post
router.post('/create', async (req, res, next) => {
  try {
    const { name, phone, email, desc } = req.body;

    if (!name) {
      return res.status(400).send({ message: 'Please enter your name' });
    } else if (!phone) {
      return res
        .status(400)
        .send({ message: 'Please enter your phone number' });
    } else if (!desc) {
      return res.status(400).send({ message: 'Please description your idea' });
    } else {
      const newMail = new Mail({
        name,
        phone,
        description: desc,
        email,
      });
      const saved_mail = await newMail.save();

      return res
        .status(200)
        .send({ message: 'Mail saved successfully', mail: saved_mail });
    }
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
              { description: { $regex: req.query.keyword, $options: 'i' } },
              { name: { $regex: req.query.keyword, $options: 'i' } },
            ],
          },
        });
      }
  
        //  Tatenda Bako
        // https://github.com/tatendabakozw
      if (req.query.sortBy && req.query.sortOrder) {
        let sort = {};
        //@ts-ignore
        sort[req.query.sortBy] = req.query.sortOrder == 'asc' ? 1 : -1;
        query.push({
          $sort: sort,
        });
      } else {
        query.push({
          $sort: { createdAt: -1 },
        });
      }
  
      let total = await Mail.countDocuments(query);
  
      //@ts-ignore
      let page = req.query.page ? parseInt(req.query.page) : 1;
      //@ts-ignore
      let perPage = req.query.perPage ? parseInt(req.query.perPage) : 16;
      let skip = (page - 1) * perPage;
  
      query.push({
        $skip: skip,
      });
      query.push({
        $limit: perPage,
      });
  
      let mail = await Mail.aggregate(query);
  
      return res.status(200).send({
        message: 'mail fetched sucessfully',
        length: mail.length,
        meta: {
          total: total,
          currentPage: page,
          perPage: perPage,
          totalPages: Math.ceil(total / perPage),
        },
        mail: mail,
      });
    } catch (error) {
      next(error);
    }
  });

export default router;
