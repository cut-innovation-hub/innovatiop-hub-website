/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import companies from './routes/companies'
import auth from './routes/auth'
import faqs from './routes/faqs'
import news from './routes/news'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './utils/mongo';
const app = express();
import dotenv from 'dotenv'

dotenv.config()

// connect database
connectDB()

app.use(cors('*'))
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

// user defined routes
app.use('/api/companies', companies)
app.use('/api/auth', auth)
app.use('/api/faqs', faqs)
app.use('/api/news', news)

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(process.env.API_URL)
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
