import express from 'express';
import cors from 'cors';

export const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: process.env.ADMIN_ORIGIN ?? 'http://localhost:5173' }));
app.use(express.json({ limit: '64kb' }));
app.get('/api/v1/health', (_request, response) => {
  response.json({ status: 'ok', service: 'bike-rescue-api' });
});
app.use((_request, response) => response.status(404).json({ error: 'Not found' }));
