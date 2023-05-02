/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import companies from './routes/companies'
import auth from './routes/auth'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './utils/mongo';
const app = express();

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


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
