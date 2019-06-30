import { Router } from 'express';
import { AuthController }  from '../controllers/auth.controller';
import UserController  from '../controllers/user.controller';
import { checkJwt } from '../middlewares/checkJwt';


class UserRoutes {
    public router: Router = Router();
    private authCtrl = new AuthController();
    private userCtrl = new UserController();
    constructor(){
        this.config();
    }

    private config(): void {
        this.router.get("/users",this.userCtrl.getUsers);
        this.router.post("/add-user",this.userCtrl.addUser);
        this.router.post("/update-user",checkJwt, this.userCtrl.updateUser);
        this.router.post("/authenticate", this.authCtrl.authenticate);
        this.router.post("/change-password", this.authCtrl.changePassword);
       // this.router.post("/register", this.authCtrl.register);
        this.router.get("/get-user-profile", checkJwt, this.userCtrl.getUserProfile);
    }
    
}


export const userRoutes = new UserRoutes().router;