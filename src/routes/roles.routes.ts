import { Router } from 'express';

import RolesController  from '../controllers/role.controller';



class RoleRoutes {
    public router: Router = Router();
    private roleCtrl = new RolesController
    constructor(){
        this.config();
    }

    private config(): void {
        this.router.post("/",this.roleCtrl.addRole);
        this.router.get("/all",this.roleCtrl.getRoles);
        this.router.get('/one',this.roleCtrl.getRole)
    }
    
}


export const roleRoutes = new RoleRoutes().router;