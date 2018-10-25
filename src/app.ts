import * as express from 'express';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
    }

    private middleware(): void {
        this.express.use('/hello', (req, res, next) => {

        });
    }


}
