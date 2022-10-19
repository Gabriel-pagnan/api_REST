import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middleware/loginRequired';

const router = new Router();
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
