import express from 'express';
import { newSession, getSession, newUser } from '../controllers/controllers.js';

// initialize router
const router = express.Router();

/*
  request methods   --->   https://www.tutorialspoint.com/http/http_methods.htm
  1st param = extended url path
  2nd param = middlewares (optional)
  3rd param = request & response function (controller)
*/

router.post('/session/new', newSession);
router.get('/session/:id', getSession);
router.post('/session/:id/login', newUser);

export default router;