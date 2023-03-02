import { Router } from 'express';

export const main = Router();

main.get('/', (request, response) => {
   response.send('I am Health!');
});

  
  