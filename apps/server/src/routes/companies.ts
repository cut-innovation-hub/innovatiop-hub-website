/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from 'express';
import { Company } from '../models/Company';
const router = express.Router();

// creeate a company
// post requerst
router.post('/create', async (req, res, next) => {
  try {
    const {
      name,
      description,
      email,
      phone,
      nature_of_products,
      location,
      gallery,
      site
    } = req.body;
    if (!name) {
      return res.status(400).send({ message: 'Please enter name!' });
    }
    if (!description) {
      return res.status(400).send({ message: 'Please enter description!' });
    }
    const NewCompany = new Company({
      name,
      description,
      email,
      phone,
      nature_of_products,
      location,
      gallery,
      site
    });
    const saved_company = await NewCompany.save();
    return res
      .status(200)
      .send({ message: 'Company saved successfully', company: saved_company });
  } catch (error) {
    next(error);
  }
});

// get all companies
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
            { name: { $regex: req.query.keyword, $options: 'i' } },
            { description: { $regex: req.query.keyword, $options: 'i' } },
            {
              nature_of_products: { $regex: req.query.keyword, $options: 'i' },
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

    let total = await Company.countDocuments(query);
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

    let companies = await Company.aggregate(query);

    return res.status(200).send({
      message: 'Companies fetched sucessfully',
      length: companies.length,
      meta: {
        total: total,
        currentPage: page,
        perPage: perPage,
        totalPages: Math.ceil(total / perPage),
      },
      companies: companies,
    });
  } catch (error) {
    next(error);
  }
});

// get single company
// get request
router.get('/single',async (req, res, next) => {
  try {
    const id = req.query
    const company = await Company.findOne({_id: id})
    return res.status(200).send({company, message: 'Company found'})
  } catch (error) {
    next(error);
  }
});

// edit single company
// patch request
router.patch('/edit', (req, res, next) => {
  try {
    console.log('edit single compnat');
  } catch (error) {
    next(error);
  }
});

export default router;
