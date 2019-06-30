import './config/passport';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from "helmet";
import * as cors from "cors";
import * as morgan from 'morgan';
import * as  mongoose from 'mongoose';
import * as passport from 'passport';
import { mainRoutes } from './routes/index.router';
import config from './config/config';



class App {
    public app: express.Application = express();
    public mongoUrl: string = config.dbUrl;  
    // public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routes();
    }

    private config():void{
        this.app.use(morgan('dev'))
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(passport.initialize());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // serving static files 
        /*this.app.use(express.static('public'));
        this.app.use("/api",mainRoutes);
        this.app.use("*", (req, res)=>{
            res.status(404).send("<h1>Ruta no encontrada</h1>")
        })*/
    }

    private mongoSetup(): void{
        // mongoose.Promise<global.Promise> ;
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true
        }).then(res =>{
            console.log("MongoDB Connected");
        });
        mongoose.set('useCreateIndex', true);      
    }

    private routes():void{
        this.app.use('/api', mainRoutes);
    }

}

export default new App().app;
