import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Config dotenv
dotenv.config();

// Get port and create express app
const port = process.env.PORT || 8080;
const app = express();

// Allow to parse JSON and accept formdata
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow cookie parsing
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);

// If in production then expose dist folder as static, and provide route
// to send index.html for loading the UI. Pre-requisite: must run 
// npm run build from the frontend directory.
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Server is ready');
  });
}

// Error middlewares
app.use(notFound);
app.use(errorHandler);

// Connect to DB and start listening...
(async function () {
  await connectDB();
  app.listen(port, () => console.log(`Server started on port ${port}...`));
})();
