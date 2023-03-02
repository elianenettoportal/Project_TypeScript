import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/routers';
import { feed_database} from './db'

dotenv.config();

const app = express();
const port = process.env.PORT;

//feed DB
feed_database()
// routes
app.use('/', routes);

// start the server
app.listen(port, () => {
  console.log('HTTP Server running! PORT', port);
});