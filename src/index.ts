import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/routers';
import { feed_database} from './db'
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;
// CORS
// Add a list of allowed origins.
const allowedOrigins = ['http://localhost:3005'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

//feed DB
feed_database()
// routes
app.use('/', routes);

// start the server
app.listen(port, () => {
  console.log('HTTP Server running! PORT', port);
});