import express from 'express';
import DailyController from './daily.controller.ts';

const router = express.Router();

router.get('/', DailyController.getAllDaily.bind(DailyController));

export default router;