import { Router } from 'express';
import authRouter from './auth.js';

const router = Router();

router.use('/users', authRouter);

export default router;