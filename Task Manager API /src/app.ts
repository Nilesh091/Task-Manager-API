import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/task.routes';
import cors from 'cors';
import path from 'path';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use('/api', taskRoutes);

export default app; 