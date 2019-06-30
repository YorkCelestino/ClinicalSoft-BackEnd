import { Router } from 'express';
import { patientRoutes } from './patients.routes';
import { userRoutes } from './users.routes';
/*
    import { AuthController }  from '../controllers/auth.controller';
    import { UserController } from '../controllers/user.controller';
    import { checkJwt } from '../middlewares/checkJwt';
import { patientRoutes } from './patients.router';
import { userRoutes } from './users.routes';
*/

class MainRoutes {
    public router: Router = Router();
    /* 
        private authCtrl = new AuthController();
        private userCtrl = new UserController();
    */
    constructor(){
        this.config();
    }

    private config(): void {
        this.router.use('/patient', patientRoutes)
        this.router.use('/user', userRoutes)
        this.router.get('/',(req, res )=>{
            res.status(200).send('<h1>Welcome to ClinicalSoft API</h1>');
        });
    }
}

export const mainRoutes = new MainRoutes().router;