import { Router } from 'express';
import multer from 'multer';
import PhotoController from '../controllers/Photo';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();
router.post('/', upload.single('foto'), PhotoController.store);

export default router;
