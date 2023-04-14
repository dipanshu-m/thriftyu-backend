import { NextFunction, Request, Response, Router } from 'express';
const router: Router = Router();

router.get('/login', (req: Request, res: Response, next: NextFunction) => {
  res.send('working');
});

export default router;
