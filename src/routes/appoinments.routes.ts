import { Router } from 'express';

import AppoinmentController from '../controllers/appoinment.controller';




class RoleRoutes {
    public router: Router = Router();
    private appoinmetCtrl = new AppoinmentController
    constructor(){
        this.config();
    }

    private config(): void {
        this.router.post("/add", this.appoinmetCtrl.addAppoinment);
        this.router.get("/all", this.appoinmetCtrl.getAppoinments);
        this.router.put("/edit",this.appoinmetCtrl.editAppoinment);
        this.router.put("/change-status",this.appoinmetCtrl.changeStatus);
        this.router.get("/today-date", this.appoinmetCtrl.getTodayAppoinments);
    }
    
}


export const appoinmentRoutes = new RoleRoutes().router;