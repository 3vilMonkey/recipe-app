import path from 'path';
import { AppModule } from './app/app.module';

const app = new AppModule();
app.listen(3000); // Backend will run on port 3000
app.serveStatic('/static', path.join(__dirname, 'assets'));
