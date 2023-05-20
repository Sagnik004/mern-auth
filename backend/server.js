import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Config dotenv
dotenv.config();

// Get port and create express app
const port = process.env.PORT || 8080;
const app = express();

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

// Error middlewares
app.use(notFound);
app.use(errorHandler);

// Start listening...
app.listen(port, () => console.log(`Server started on port ${port}...`));