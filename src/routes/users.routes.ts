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
        this.router.put("/update-user", this.userCtrl.updateUser);
        this.router.post("/authenticate", this.authCtrl.authenticate);
        this.router.post("/change-password", this.authCtrl.changePassword);
        this.router.get("/get-user-profile",checkJwt, this.userCtrl.getUserProfile);
        this.router.get("/get-user-one",checkJwt, this.userCtrl.getUser);
        this.router.put("/change-status", this.userCtrl.changeStatus);
        this.router.get("/get-doctors",this.userCtrl.getDoctors);
    }
    
}


export const userRoutes = new UserRoutes().router;