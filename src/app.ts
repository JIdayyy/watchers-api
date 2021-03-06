import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import whitelist from './constants/cors.whitelist';
import restApi from './api';
import errorHandler from './middlewares/errorHandler';

// cron is a sheduler who executes tasks at a specific time
// here we are scheduling a task to send log files to our cloud and delete them from the api folder

// cron.schedule('0 0 * * *', () => {
//   console.log('It is midnight, time to clean the logs');
//   fs.readFile('access.txt', async (err, data) => {
//     const file = await minioClient.putObject(
//       'ytask',
//       `logs/access-${new Date(Date.now()).toISOString()}.txt`,
//       data,
//       {
//         'Content-type': 'text/plain',
//       }
//     );
//     if (file) {
//       fs.writeFileSync('access.txt', '');
//     }
//   });
// });

const app = express();

app.use(express.json());

app.use(express.static('public'));

const whitelistedUrls = whitelist || [];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, check?: boolean) => Error | void
  ) => {
    console.log(origin);
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }

    if (whitelistedUrls.indexOf(origin as string) !== -1) {
      return callback(null, true);
    }
    if (origin?.split('.').includes('vercel')) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  exposedHeaders: ['x-authorization'],
};

app.use(cors(corsOptions));

// const accessLogStream = fs.createWriteStream('access.txt', {
//   flags: 'a',
// });

// app.use(morgan('combined', { stream: accessLogStream }));
app.use(restApi);

app.use(errorHandler);

app.get('/', (req, res) => res.status(200).send('Hello World'));

export const httpServer = createServer(app);

export default app;
