import express from 'express';
import { ENV } from './config/env';

import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';


const app = express();

app.listen(ENV.PORT, () => {
  console.log('Server is running on port 3000');
});

app.use(clerkMiddleware()); // auth objeect will be attached to the req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ENV.FRONTEND_URL
}));  

app.get('/', (req, res) => {    
    
}); 
const port = 3000;