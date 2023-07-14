import express from 'express';
import  { DailyRouter }  from './daily/index.ts';
const router = express.Router();
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.use('/daily',DailyRouter);

export default router;