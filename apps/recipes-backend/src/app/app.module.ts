import cors from 'cors';
import express from 'express';
import imagesController from './controllers/images.controller';
import recipesController from './controllers/recipes.controller';

export class AppModule {
  private app = express();

  constructor() {
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private configureRoutes(): void {
    this.app.use('/api/recipes', recipesController);
    this.app.use('/static/images', imagesController);
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Recipes backend is running at http://localhost:${port}`);
    });
  }
}
