import express from 'express';
import path from 'path';
import ejs from 'ejs';

class App {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(express.static(path.join(__dirname, 'public')));
    this.server.set('views', path.join(__dirname, 'public'));
    this.server.engine('html', ejs.renderFile);
    this.server.set('view engine', 'html');

    this.server.use('/', (req, res) => {
      res.render('index.html');
    });
  }
}

export default new App().server;
