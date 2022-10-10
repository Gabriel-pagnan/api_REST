import { Router } from 'express';
import loginRequired from '../middleware/loginRequired';
import PhotoController from '../controllers/Photo';

const router = new Router();
router.post('/', loginRequired, PhotoController.store);

export default router;
