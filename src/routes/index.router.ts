import { Router } from 'express';
import { patientRoutes } from './patients.routes';
import { userRoutes } from './users.routes';
import { TreatmentRoutes } from './treatment.routes';
import { appoinmentRoutes } from './appoinments.routes';
import { roleRoutes } from './roles.routes';
import {checkJwt} from '../middlewares/checkJwt';
import { houseCharacteristicsRoutes } from './houseCharacteristics.routes';
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
        this.router.use('/user'/*,checkJwt*/, userRoutes)
        this.router.use('/role'/*,checkJwt*/, roleRoutes)
        this.router.use('/houseCharacteristics', houseCharacteristicsRoutes )
        this.router.use('/appointment', appoinmentRoutes)
        this.router.use('/treatment', TreatmentRoutes)
        this.router.get('/',(req, res )=>{
            res.status(200).send('<h1>Welcome to ClinicalSoft API</h1>');
        });
    }
}

export const mainRoutes = new MainRoutes().router;