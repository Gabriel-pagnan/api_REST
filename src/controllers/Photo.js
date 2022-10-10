import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('foto');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const photo = await Photo.create({ originalname, filename, aluno_id });

      res.json(photo);
    });
  }
}

export default new PhotoController();
