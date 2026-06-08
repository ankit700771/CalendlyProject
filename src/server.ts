import { app } from './app.js';
import { PORT } from './config/env.js';
import { connectDatabase } from './config/database.js';

async function startServer() {
    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`[Server]: is running on port ${PORT}`);
    });
}

startServer();
