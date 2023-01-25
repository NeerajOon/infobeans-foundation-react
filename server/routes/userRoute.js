import express from 'express';
import multer from 'multer';
import { registration } from '../controller/mainController.js';
const router = express.Router();
const docsUpload = multer({dest:'public/documents'});
router.post('/registration',docsUpload.array('docs'),registration);
export default router;