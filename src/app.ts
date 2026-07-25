import express, { Express, NextFunction, Request, Response } from 'express';
import { userRouter } from './routers/user.router.js';
import { errorHandler } from './middlewares/error-handler.js';
import { routeNotFound } from './middlewares/route-not-found.js';
const app: Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.get('/helth', (_req: Request, res: Response) => {
    res.json({
        status: 'ok!',
        timestamp: new Date().toISOString()
    })
})

app.use('/api/users', userRouter);



app.use(routeNotFound);
app.use(errorHandler);

export { app };
