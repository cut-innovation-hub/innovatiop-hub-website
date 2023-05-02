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
router.get('/all', (req, res, next) => {
  try {
    console.log('get all companies');
  } catch (error) {
    next(error);
  }
});

// get single company
// get request
router.get('/single', (req, res, next) => {
  try {
    console.log('get single company');
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
