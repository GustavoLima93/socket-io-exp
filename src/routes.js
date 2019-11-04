import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ version: '0.0.1' });
});

export default routes;
