import express, { Express, NextFunction, Request, Response } from 'express';
import { userRouter } from './routers/user.router.js';
const app: Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

function logRequest(req: Request, _res: Response, next: NextFunction) {
    console.log('URL : ', req.url);
    next();
    console.log('completed');
}

function anotherLogger(_req: Request, _res: Response, next: NextFunction) {
    console.log('another logger');
    next();
}

const sequence = [logRequest, anotherLogger];

app.get('/helth', sequence, (_req: Request, res: Response) => {
    res.json({
        status: 'ok!',
        timestamp: new Date().toISOString()
    })
})

app.use('/api/users', userRouter);

export { app };
